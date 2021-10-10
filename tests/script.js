/* eslint-disable camelcase */
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate, Trend } from 'k6/metrics';

let LatencyMetric = new Trend('latency', true);
let errorRate = new Rate('errorRate');

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-arrival-rate',
      startRate: 1,
      // duration: '1m',
      timeUnit: '1s',
      preAllocatedVUs: 0,
      maxVUs: 100,
      stages: [
        { duration: '1m', target: 1 },
        { duration: '30s', target: 10 },
        { duration: '1m', target: 10 },
        { duration: '30s', target: 100 },
        { duration: '1m', target: 100 },
        { duration: '30s', target: 1000 },
        { duration: '1m', target: 1000 },
        { duration: '30s', target: 10000 },
        { duration: '1m', target: 10000 },
        { duration: '2m', target: 0 }
      ],
    },
  },
  thresholds: {
    'errorRate': [
      { threshold: 'rate < 0.1', abortOnFail: true, delayAbortEval: '1m' },
    ],
    'reqDuration': [{ http_req_duration: ['p(95)<5'] }],
  }
};

export default function () {
  const start = Date.now();
  let res = http.get('http://localhost:3000/products/product_id=547354/');
  const latency = Date.now() - start;
  LatencyMetric.add(latency);

  errorRate.add(res.status >= 400);
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}