import json, sys, copy, importlib.metadata
from pathlib import Path
from jsonschema import Draft202012Validator

def fnv(v):
    b=json.dumps(v,ensure_ascii=False,separators=(',',':')).encode('utf-16-le');h=2166136261
    for i in range(0,len(b),2):h=((h^(b[i]+256*b[i+1]))*16777619)&0xffffffff
    return f'{h:08x}'

def validate(r,v):
    errs=[str(e.json_path)+':'+e.validator for e in v.iter_errors(r)]
    if not errs:
        for e in r['evidence']:
            if e['start']>e['end']:errs.append('inverted_line_range')
    return errs

def run(records,suite):
    schema=json.loads(Path(__file__).with_name('review-contract.json').read_text());Draft202012Validator.check_schema(schema);v=Draft202012Validator(schema)
    results={}
    for name,groups in suite:
        outcomes=[{'group':i,'case':j,'expected':expected,'actual':Draft202012Validator(s).is_valid(d)} for i,(s,ts) in enumerate(groups) for j,(d,expected) in enumerate(ts)]
        results[name]={'groups':len(groups),'cases':len(outcomes),'matches':sum(x['actual']==x['expected'] for x in outcomes),'failures':[x for x in outcomes if x['actual']!=x['expected']]}
    checked=[{'id':r['id'],'errors':validate(r,v)} for r in records]
    good=next(r for r in records if r['state']=='source_reviewed');pending=next(r for r in records if r['state']=='pending')
    tests=[]
    def test(name,base,change,expected):
        r=copy.deepcopy(base);change(r);errs=validate(r,v);tests.append({'name':name,'expected':expected,'actual':not errs,'errors':errs})
    test('reviewed valid',good,lambda r:None,True)
    test('pending valid without evidence',pending,lambda r:None,True)
    test('blank claim',good,lambda r:r.update(claim='   '),False)
    test('missing limitation',good,lambda r:r.pop('limitation'),False)
    test('null limitation',good,lambda r:r.update(limitation=None),False)
    test('reviewed no evidence',good,lambda r:r.update(evidence=[]),False)
    test('pending falsely promoted',pending,lambda r:r.update(state='source_reviewed'),False)
    test('pending with asserted reviewed evidence',pending,lambda r:r.update(evidence=good['evidence']),False)
    test('invented model success state',good,lambda r:r.update(state='model_verified'),False)
    test('unknown field',good,lambda r:r.update(uplift=100),False)
    test('bad SHA',good,lambda r:r['evidence'][0].update(blob='not-sha'),False)
    test('missing source line',good,lambda r:r['evidence'][0].pop('start'),False)
    test('inverted range',good,lambda r:r['evidence'][0].update(start=999,end=1),False)
    return {'validator_version':importlib.metadata.version('jsonschema'),'dialect':'2020-12','public_input_fingerprint':fnv(suite),'review_fingerprint':fnv(records),'public':results,'records':len(records),'reviewed':sum(r['state']=='source_reviewed' for r in records),'record_failures':[x for x in checked if x['errors']],'mutations':tests,'scope':'Contract shape and line order only; no semantic truth, external availability or model uplift proof.'}

if __name__=='__main__':
    m=json.load(open(sys.argv[1]));suite=json.load(open(sys.argv[2]));records=[c['review'] for c in m['cards']]
    result=run(records,suite);print(json.dumps(result,ensure_ascii=False,indent=2))
    sys.exit(0 if all(x['cases']==x['matches'] for x in result['public'].values()) and not result['record_failures'] and all(x['expected']==x['actual'] for x in result['mutations']) else 1)
