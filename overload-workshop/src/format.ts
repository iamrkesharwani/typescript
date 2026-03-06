function format(input: number): string;
function format(input: Date): string;

function format(input: number | Date): string {
  if (input instanceof Date) {
    return input.toLocaleDateString();
  }
  return input.toFixed(2);
}

console.log(format(new Date()));
console.log(format(12.2454524));
