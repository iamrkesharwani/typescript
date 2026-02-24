type TempUnit = 'celsius' | 'fahrenheit';

function convertTemp(
  input: number | null | undefined,
  fromUnit: TempUnit,
  toUnit: TempUnit
): number {
  if (input == null || Number.isNaN(input)) {
    throw new Error('Invalid temperature input');
  }

  if (fromUnit === toUnit) {
    return input;
  }

  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    return (input * 9) / 5 + 32;
  }

  if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    return ((input - 32) * 5) / 9;
  }

  throw new Error('Invalid conversion');
}
