import * as fn from './index.js';

const name: string = 'rahul kesharwani';

const capitalized: string = fn.capitalize(name);
const short: string = fn.truncate(name);
const slug: string = fn.slugify(name);
const words: number = fn.countWords(name);
const padded: string = fn.padStart(7);

console.log(capitalized);
console.log(short);
console.log(slug);
console.log(words);
console.log(padded);
