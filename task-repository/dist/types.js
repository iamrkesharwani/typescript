export class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
    }
}
export class InMemoryTaskRepository {
    tasks = new Map();
    findById(id) {
        const task = this.tasks.get(id);
        if (!task)
            throw new NotFoundError(`Task ${id} not found`);
        return task;
    }
    findAll() {
        return Array.from(this.tasks.values());
    }
    save(task) {
        this.tasks.set(task.id, task);
    }
    delete(id) {
        if (!this.tasks.has(id))
            throw new NotFoundError(`Task ${id} not found`);
        this.tasks.delete(id);
    }
}
export class TaskService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    createTask(task) {
        this.repository.save(task);
    }
    getTask(id) {
        return this.repository.findById(id);
    }
    getAllTasks() {
        return this.repository.findAll();
    }
    deleteTask(id) {
        this.repository.delete(id);
    }
}
