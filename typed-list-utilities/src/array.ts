const nums: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 5, 8];

export function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

export function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

console.log(first(nums));
console.log(last(nums));
console.log(chunk(nums, 2));
console.log(unique(nums));
