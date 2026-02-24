import { getTotalByCategory } from './helper.js';
const expenses = [
    { name: 'Groceries', amount: 2500, category: 'food' },
    { name: 'Uber', amount: 300, category: 'transport' },
    { name: 'Lunch', amount: 200, category: 'food' },
];
const totalFood = getTotalByCategory(expenses, 'food');
console.log(totalFood);
