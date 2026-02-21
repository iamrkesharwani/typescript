// --- formatCurrency ---
// Passing a string instead of number
// Passing wrong types of locales or currency
// Using result as a number
function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(amount);
}
// --- Clamp ---
// Passing strings instead of numbers
// Treating return value as string
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
// --- Slugify ---
// Passing numbers
function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}
// --- Truncate ---
// Calling .length on non-string
function truncate(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}
// --- Debounce ---
// Passing non-function
// Passing non-number delay
// Expecting return value
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
const debouncedLog = debounce((x) => {
    console.log(x + 1);
}, 500);
console.log(formatCurrency(200, 'en-IN', 'INR'));
console.log(clamp(5000, 2000, 5500));
console.log(slugify('Hello World'));
console.log(truncate('Hello world', 5));
debouncedLog(5);
export {};
//# sourceMappingURL=index.js.map