"""AI-D R36: offline diagnostic, not a trading strategy or full backtest.
Requires pandas, numpy, plotly. Run: python aid_r36_temporal_audit.py
Method adapted from Freqtrade's full-vs-truncated-history comparison; no Freqtrade code copied.
Data: plotly.express.data.stocks(), 2018–2019 normalized stock closing series.
"""
import time
import numpy as np
import pandas as pd
import plotly.express as px

def prefix_check(fn, x):
    full = fn(x)
    differences = 0
    for n in range(1, len(x)+1):
        prefix = fn(x.iloc[:n])
        differences += int((~np.isclose(full.iloc[n-1], prefix.iloc[-1], equal_nan=True, rtol=1e-9, atol=1e-12)).sum())
    return differences, x.size

def main():
    t0 = time.perf_counter()
    df = px.data.stocks()
    x = df.drop(columns='date').astype(float)
    cases = {
        'trailing_4_mean': (lambda p: p.rolling(4).mean(), False),
        'past_return': (lambda p: p.pct_change(), False),
        'next_return': (lambda p: p.shift(-1)/p-1, True),
        'centered_5_mean': (lambda p: p.rolling(5, center=True).mean(), True),
        'whole_sample_mean': (lambda p: p/p.mean(), True),
    }
    print(f'Data: {len(x)} rows x {x.shape[1]} assets; {df.date.iloc[0]} to {df.date.iloc[-1]}')
    for name,(fn, expected) in cases.items():
        k,n = prefix_check(fn,x)
        assert (k>0)==expected, name
        print(f'{name}: {k}/{n} changed; {"DETECTED" if k else "NO_CHANGE"}')
    # Simulated upstream fault: the next closing value has already been stamped with the current row date.
    # Truncation of the already contaminated input cannot reveal this hidden availability-time violation.
    bad_input = x.shift(-1).iloc[:-1]
    k,n=prefix_check(lambda p:p, bad_input)
    decision_time=pd.to_datetime(df.date.iloc[:-1]).reset_index(drop=True)
    available_time=pd.to_datetime(df.date.iloc[1:]).reset_index(drop=True)
    violations=int((available_time>decision_time).sum())*x.shape[1]
    assert k==0 and violations==n
    print(f'upstream_mislabeled_next_close: {k}/{n} changed; availability violations={violations}/{n}')
    print('All 6 designed assertions passed. Not a blind model comparison.')
    print(f'Local compute elapsed (including data load): {time.perf_counter()-t0:.3f} s')
if __name__=='__main__': main()
