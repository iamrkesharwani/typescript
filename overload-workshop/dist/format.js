function format(input) {
    if (input instanceof Date) {
        return input.toLocaleDateString();
    }
    return input.toFixed(2);
}
console.log(format(new Date()));
console.log(format(12.2454524));
export {};
