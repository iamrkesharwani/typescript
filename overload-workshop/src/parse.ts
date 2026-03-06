function parse(input: string, type: 'number'): number;
function parse(input: string, type: 'date'): Date;

function parse(input: string, type: 'number' | 'date'): number | Date {
  if (type === 'number') {
    return parseFloat(input);
  }
  return new Date(input);
}

const myNum = parse('123', 'number');
const myDate = parse('2026-01-01', 'date');

console.log(myNum);
console.log(myDate);
