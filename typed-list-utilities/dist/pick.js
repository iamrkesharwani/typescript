const users = [
    { id: 1, role: 'admin', name: 'Rahul' },
    { id: 2, role: 'user', name: 'Amit' },
    { id: 3, role: 'admin', name: 'Priya' },
];
function pick(obj, keys) {
    const result = {};
    for (const key of keys) {
        result[key] = obj[key];
    }
    return result;
}
const targetUser = users[0];
if (targetUser)
    console.log(pick(targetUser, ['id', 'role']));
export {};
