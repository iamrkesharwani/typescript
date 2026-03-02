const nums = [1, 2, 3, 4, 4, 5, 6, 6, 5, 8];
export function first(arr) {
    return arr[0];
}
export function last(arr) {
    return arr[arr.length - 1];
}
export function chunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
export function unique(array) {
    return [...new Set(array)];
}
console.log(first(nums));
console.log(last(nums));
console.log(chunk(nums, 2));
console.log(unique(nums));
