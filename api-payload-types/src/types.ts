type TaskStatus = 'todo' | 'in-progress' | 'done';

type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
};

type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;

type UpdateTaskInput = Partial<CreateTaskInput>;

type PublicTask = Pick<Task, 'title' | 'status'>;

const TaskStatusLabels: Record<TaskStatus, string> = {
  todo: 'To-Do',
  'in-progress': 'In Progress',
  done: 'Completed',
};
