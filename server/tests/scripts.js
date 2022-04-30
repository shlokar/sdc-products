import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  InsecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '10s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1000 },
    { duration: '3m', target: 1000 },
    { duration: '10s', target: 100 },
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ]
}

export default function () {
  http.get(`http://localhost:3000/products`);
  // http.get(`http://localhost:3000/products/${Math.floor(Math.random() * 1000000)}/related`);
  sleep(1);
}