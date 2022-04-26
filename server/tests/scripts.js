import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1000 },
    { duration: '3m', target: 1000 },
    { duration: '10s', target: 100 },
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ],
}

export default function () {
  http.get('https://localhost:3000/products');
  sleep(1);
}