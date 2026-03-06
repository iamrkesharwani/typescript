function head(arr: []): never;
function head<T>(arr: [T, ...T[]]): T;

function head(arr: any[]): any {
  return arr[0];
}

const result = head([1, 2, 3]);
const result2 = head([]);

console.log(result);
console.log(result2);
