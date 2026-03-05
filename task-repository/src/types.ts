type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface Repository<T> {
  findById(id: string): T;
  findAll(): T[];
  save(task: T): void;
  delete(id: string): void;
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class InMemoryTaskRepository implements Repository<Task> {
  private tasks = new Map<string, Task>();

  findById(id: string): Task {
    const task = this.tasks.get(id);
    if (!task) throw new NotFoundError(`Task ${id} not found`);
    return task;
  }

  findAll(): Task[] {
    return Array.from(this.tasks.values());
  }

  save(task: Task): void {
    this.tasks.set(task.id, task);
  }

  delete(id: string): void {
    if (!this.tasks.has(id)) throw new NotFoundError(`Task ${id} not found`);
    this.tasks.delete(id);
  }
}

export class TaskService {
  constructor(private repository: Repository<Task>) {}

  createTask(task: Task) {
    this.repository.save(task);
  }

  getTask(id: string): Task {
    return this.repository.findById(id);
  }

  getAllTasks(): Task[] {
    return this.repository.findAll();
  }

  deleteTask(id: string) {
    this.repository.delete(id);
  }
}
