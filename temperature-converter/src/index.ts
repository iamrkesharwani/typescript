type tempType = 'celsius' | 'farenheit';

function convertTemp(
  input: number,
  fromUnit: tempType,
  toUnit: tempType
): number {
  if (input === undefined || Number.isNaN(input))
    throw new Error('Enter a temperature input');

  let temperature: number = input;

  if (fromUnit === 'celsius' && toUnit === 'farenheit') {
    temperature = (input * 9) / 5 + 32;
  } else if (fromUnit === 'farenheit' && toUnit === 'celsius') {
    temperature = ((input - 32) * 5) / 9;
  } else if (fromUnit === toUnit) {
    temperature = input;
  } else {
    throw new Error('Invalid conversion');
  }

  return temperature;
}

console.log(convertTemp(10, 'celsius', 'farenheit'));
console.log(convertTemp(0, 'celsius', 'farenheit'));
console.log(convertTemp(32, 'farenheit', 'celsius'));
