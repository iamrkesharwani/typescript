import { once, memoize, retry, debounce } from './index.js';

/* once */
let count = 0;
const runOnce = once((): number => {
  count++;
  return count;
});

console.log(runOnce());
console.log(runOnce());
console.log('once count:', count);

/* memoize */
let calls = 0;
const add = memoize((a: number, b: number): number => {
  calls++;
  return a + b;
});

console.log(add(2, 3));
console.log(add(2, 3));
console.log('memoize calls:', calls);

/* retry */
let attempts = 0;
retry(async () => {
  attempts++;

  if (attempts < 3) {
    throw new Error('fail');
  }

  return 'success';
}, 5)
  .then((res) => {
    console.log(res);
    console.log('retry attempts:', attempts);
  })
  .catch(console.error);

/* debounce */
let debouncedCalls = 0;

const debounceFn = debounce(() => {
  debouncedCalls++;
  console.log('debounced called:', debouncedCalls);
}, 100);

debounceFn();
debounceFn();
debounceFn();

setTimeout(() => {
  console.log('final debounce count:', debouncedCalls);
}, 300);
