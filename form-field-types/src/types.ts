type User = {
  name: string;
  age: number;
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;

type FormFields<T> = {
  [K in keyof T]: {
    value: T[K];
    error: string | null;
    touched: boolean;
  };
};

type isString<T> = T extends string ? true : false;

type TaskStatus = 'todo' | 'in-progress' | 'done';

type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;

type TaskFormFields = FormFields<CreateTaskInput>;
