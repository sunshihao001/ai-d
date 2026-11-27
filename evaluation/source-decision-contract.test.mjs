// Source and evidence suitability boundary tests, 2026-11-06.
// Run: node --test evaluation/source-decision-contract.test.mjs
// This is a deterministic contract, NOT a model that classifies natural language or verifies real facts.
import test from 'node:test';
import assert from 'node:assert/strict';

// The caller must establish the task's requiredOrigin, subject and claimId.
// Metadata on evidence is treated as a candidate assertion, not an independently audited truth.
export function decideSource(task, candidates = []) {
  const origin = task.requiredOrigin;
  if (origin === 'none') {
    return { action: 'DIRECT', reason: 'The request can use supplied input without retrieval.' };
  }
  if (origin === 'private' && task.authorizedAccess !== true) {
    return { action: 'NEED_ACCESS_OR_INPUT', reason: 'Authorized private source is unavailable.' };
  }
  if (!['internal','external','private'].includes(origin)) {
    return { action: 'NEED_SCOPE', reason: 'Required source type is unresolved.' };
  }
  if (task.targetAmbiguous === true || !task.claimId || !task.subject) {
    return { action: 'NEED_SCOPE', reason: 'Subject or claim to verify is underspecified.' };
  }
  const eligible = candidates.filter(c =>
    c.origin === origin &&
    c.subject === task.subject &&
    (task.requiredVersion == null || c.version === task.requiredVersion) &&
    (task.notBefore == null || (c.observedAt != null && c.observedAt >= task.notBefore)) &&
    (task.requiredAuthority == null || c.authority === task.requiredAuthority)
  );
  const support = eligible.filter(c => c.claimRelations?.[task.claimId] === 'supports');
  const contradict = eligible.filter(c => c.claimRelations?.[task.claimId] === 'contradicts');
  if (support.length && contradict.length) {
    return { action: 'EVIDENCE_CONFLICT', reason: 'Eligible sources disagree on a single claim.',
      evidence: [...support,...contradict].map(c=>c.id).sort() };
  }
  if (contradict.length) {
    return { action: 'CLAIM_CONTRADICTED', reason: 'A source contradicts the stated claim.',
      evidence: contradict.map(c=>c.id).sort() };
  }
  if (support.length) {
    return { action: 'CANDIDATE_EVIDENCE_MATCH', reason: 'Candidate matches declared source attributes; verify it before answering.',
      evidence: support.map(c=>c.id).sort() };
  }
  return { action: {
    internal: 'SEEK_INTERNAL_EVIDENCE',
    external: 'SEEK_EXTERNAL_PRIMARY_EVIDENCE',
    private: 'SEEK_AUTHORIZED_PRIVATE_EVIDENCE',
  }[origin], reason: 'No eligible evidence supports the stated claim.' };
}
function src(id,origin,subject,claimId,relation='supports',opts={}) {
  return { id,origin,subject,version:opts.version??null,observedAt:opts.observedAt??null,
    authority:opts.authority??null,claimRelations:{[claimId]:relation} };
}
const goalV1=src('goal-v1','internal','ai-d-goal','goal-policy','supports',{version:'v1',authority:'project-decision'});
const goalV2=src('goal-v2','internal','ai-d-goal','goal-policy','supports',{version:'v2',authority:'project-decision'});
const genericTheory=src('generic','internal','RAG-theory','api-implementation');
const description=src('description','external','library-X','production-tested','supports',{version:'2',authority:'vendor-description'});
const tested=src('tested','external','library-X','production-tested','supports',{version:'2',authority:'observed-run'});
const failing=src('failing','external','library-X','production-tested','contradicts',{version:'2',authority:'observed-run'});
const apiOld=src('api-old','external','api-Z','behavior','supports',{version:'2025'});
const apiNew=src('api-new','external','api-Z','behavior','supports',{version:'2026',observedAt:'2026-11-05'});
const announcement=src('notice','external','company-A','announcement','supports',{authority:'official',observedAt:'2026-11-05'});
const cases=[
  ['hello',{requiredOrigin:'none'},[], 'DIRECT'],
  ['rewrite supplied paragraph',{requiredOrigin:'none'},[genericTheory], 'DIRECT'],
  ['project policy exact version',{requiredOrigin:'internal',subject:'ai-d-goal',claimId:'goal-policy',requiredVersion:'v2',requiredAuthority:'project-decision'},[goalV1,goalV2], 'CANDIDATE_EVIDENCE_MATCH'],
  ['old goal excluded',{requiredOrigin:'internal',subject:'ai-d-goal',claimId:'goal-policy',requiredVersion:'v2'},[goalV1], 'SEEK_INTERNAL_EVIDENCE'],
  ['company announcement is external',{requiredOrigin:'external',subject:'company-A',claimId:'announcement',requiredAuthority:'official',notBefore:'2026-11-05'},[genericTheory], 'SEEK_EXTERNAL_PRIMARY_EVIDENCE'],
  ['matching original notice',{requiredOrigin:'external',subject:'company-A',claimId:'announcement',requiredAuthority:'official',notBefore:'2026-11-05'},[announcement], 'CANDIDATE_EVIDENCE_MATCH'],
  ['unnamed API requires scope',{requiredOrigin:'external',claimId:'behavior'},[apiNew], 'NEED_SCOPE'],
  ['API version mismatch',{requiredOrigin:'external',subject:'api-Z',claimId:'behavior',requiredVersion:'2026'},[apiOld], 'SEEK_EXTERNAL_PRIMARY_EVIDENCE'],
  ['API version match',{requiredOrigin:'external',subject:'api-Z',claimId:'behavior',requiredVersion:'2026'},[apiOld,apiNew], 'CANDIDATE_EVIDENCE_MATCH'],
  ['README cannot prove production test',{requiredOrigin:'external',subject:'library-X',claimId:'production-tested',requiredVersion:'2',requiredAuthority:'observed-run'},[description], 'SEEK_EXTERNAL_PRIMARY_EVIDENCE'],
  ['test trace matches observed action',{requiredOrigin:'external',subject:'library-X',claimId:'production-tested',requiredVersion:'2',requiredAuthority:'observed-run'},[description,tested], 'CANDIDATE_EVIDENCE_MATCH'],
  ['two tests contradict',{requiredOrigin:'external',subject:'library-X',claimId:'production-tested',requiredVersion:'2',requiredAuthority:'observed-run'},[tested,failing], 'EVIDENCE_CONFLICT'],
  ['counterexample only',{requiredOrigin:'external',subject:'library-X',claimId:'production-tested',requiredAuthority:'observed-run'},[failing], 'CLAIM_CONTRADICTED'],
  ['private data not authorized',{requiredOrigin:'private',subject:'user-record',claimId:'choice',authorizedAccess:false},[], 'NEED_ACCESS_OR_INPUT'],
  ['private data authorized but absent',{requiredOrigin:'private',subject:'user-record',claimId:'choice',authorizedAccess:true},[], 'SEEK_AUTHORIZED_PRIVATE_EVIDENCE'],
  ['unknown source never picks arbitrary file',{requiredOrigin:'unknown',subject:'x',claimId:'x'},[genericTheory], 'NEED_SCOPE'],
  ['unrelated theory cannot override API source',{requiredOrigin:'external',subject:'api-Z',claimId:'behavior',requiredVersion:'2026'},[apiNew,genericTheory], 'CANDIDATE_EVIDENCE_MATCH'],
  ['outdated company news',{requiredOrigin:'external',subject:'company-A',claimId:'announcement',notBefore:'2026-11-05',requiredAuthority:'official'},[src('old','external','company-A','announcement','supports',{authority:'official',observedAt:'2026-01-01'})], 'SEEK_EXTERNAL_PRIMARY_EVIDENCE'],
];
for (const [name,task,sources,expected] of cases) {
  test(name,()=>assert.equal(decideSource(task,sources).action,expected));
}
test('irrelevant candidates do not change a match',()=>{
  const task={requiredOrigin:'external',subject:'api-Z',claimId:'behavior',requiredVersion:'2026'};
  assert.deepEqual(decideSource(task,[apiNew]),decideSource(task,[apiNew,genericTheory,description]));
});
test('same-version contradiction invalidates a single-source result',()=>{
  const task={requiredOrigin:'external',subject:'library-X',claimId:'production-tested',requiredVersion:'2',requiredAuthority:'observed-run'};
  assert.equal(decideSource(task,[tested]).action,'CANDIDATE_EVIDENCE_MATCH');
  assert.equal(decideSource(task,[tested,failing]).action,'EVIDENCE_CONFLICT');
});
test('missing claim coverage blocks a seemingly perfect source',()=>{
  assert.equal(decideSource({requiredOrigin:'external',subject:'api-Z',claimId:'different',requiredVersion:'2026'},[apiNew]).action,'SEEK_EXTERNAL_PRIMARY_EVIDENCE');
});
