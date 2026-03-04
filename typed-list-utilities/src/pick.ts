const users = [
  { id: 1, role: 'admin', name: 'Rahul' },
  { id: 2, role: 'user', name: 'Amit' },
  { id: 3, role: 'admin', name: 'Priya' },
];

function pick<T, const K extends readonly (keyof T)[]>(
  obj: T,
  keys: K
): Pick<T, K[number]> {
  const result = {} as Pick<T, K[number]>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}

const targetUser = users[0];
if (targetUser) console.log(pick(targetUser, ['id', 'role']));
