export function getTotalByCategory(expenses, category) {
    return expenses.reduce((total, expense) => {
        if (expense.category === category) {
            return total + expense.amount;
        }
        return total;
    }, 0);
}
