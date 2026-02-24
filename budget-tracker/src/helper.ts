type Expense = {
  name: string;
  amount: number;
  category: string;
};

type Category = 'food' | 'transport' | 'rent';

export function getTotalByCategory(
  expenses: Expense[],
  category: Category
): number {
  return expenses.reduce((total: number, expense: Expense) => {
    if (expense.category === category) {
      return total + expense.amount;
    }
    return total;
  }, 0);
}
