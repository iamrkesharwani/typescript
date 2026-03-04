const users = [
    { id: 1, role: 'admin', name: 'Rahul' },
    { id: 2, role: 'user', name: 'Amit' },
    { id: 3, role: 'admin', name: 'Priya' },
];
function groupBy(items, key) {
    const result = {};
    for (const item of items) {
        const value = String(item[key]);
        if (!result[value]) {
            result[value] = [];
        }
        result[value].push(item);
    }
    return result;
}
console.log(groupBy(users, 'role'));
export {};
