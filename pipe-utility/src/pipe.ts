export function pipe<T, A>(value: T, f1: (arg: T) => A): A;

export function pipe<T, A, B>(
  value: T,
  f1: (arg: T) => A,
  f2: (arg: A) => B
): B;

export function pipe<T, A, B, C>(
  value: T,
  f1: (arg: T) => A,
  f2: (arg: A) => B,
  f3: (arg: B) => C
): C;

export function pipe<T, A, B, C, D>(
  value: T,
  f1: (arg: T) => A,
  f2: (arg: A) => B,
  f3: (arg: B) => C,
  f4: (arg: C) => D
): D;

export function pipe<T, A, B, C, D, E>(
  value: T,
  f1: (arg: T) => A,
  f2: (arg: A) => B,
  f3: (arg: B) => C,
  f4: (arg: C) => D,
  f5: (arg: D) => E
): E;

export function pipe(value: any, ...fns: Function[]): any {
  return fns.reduce((acc, fn) => fn(acc), value);
}
