export class Store<T extends { id: string }> {
  private items = new Map<string, T>();

  add(item: T): void {
    if (this.items.has(item.id)) {
      throw new Error('Item already exists');
    }
    this.items.set(item.id, item);
  }

  getById(id: string): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }

  update(id: string, updates: Partial<T>): T | undefined {
    const existing = this.items.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...updates };
    this.items.set(id, updated);
    return updated;
  }

  remove(id: string): boolean {
    return this.items.delete(id);
  }

  findWhere<K extends keyof T>(field: K, value: T[K]): T | undefined {
    for (const item of this.items.values()) {
      if (item[field] === value) {
        return item;
      }
    }
    return undefined;
  }

  filterWhere<K extends keyof T>(field: K, value: T[K]): T[] {
    const result: T[] = [];
    for (const item of this.items.values()) {
      if (item[field] === value) {
        result.push(item);
      }
    }
    return result;
  }
}

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};
