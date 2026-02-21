// --- formatCurrency ---
// Passing a string instead of number
// Passing wrong types of locales or currency
// Using result as a number
function formatCurrency(
  amount: number,
  locale: string = 'en-US',
  currency: string = 'USD'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

// --- Clamp ---
// Passing strings instead of numbers
// Treating return value as string
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// --- Slugify ---
// Passing numbers
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// --- Truncate ---
// Calling .length on non-string
function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

// --- Debounce ---
// Passing non-function
// Passing non-number delay
// Expecting return value
function debounce(
  fn: (...args: any[]) => void,
  delay: number
): (...args: any[]) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedLog = debounce((x: number) => {
  console.log(x + 1);
}, 500);

console.log(formatCurrency(200, 'en-IN', 'INR'));
console.log(clamp(5000, 2000, 5500));
console.log(slugify('Hello World'));
console.log(truncate('Hello world', 5));
debouncedLog(5);
