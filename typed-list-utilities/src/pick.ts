const users = [
  { id: 1, role: 'admin', name: 'Rahul' },
  { id: 2, role: 'user', name: 'Amit' },
  { id: 3, role: 'admin', name: 'Priya' },
];

function pick<T, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    (result as any)[key] = obj[key];
  }
  return result;
}

const targetUser = users[0];
if (targetUser) console.log(pick(targetUser, ['id', 'role'] as const));
