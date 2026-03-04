export class Store {
    items = new Map();
    add(item) {
        if (this.items.has(item.id)) {
            throw new Error('Item already exists');
        }
        this.items.set(item.id, item);
    }
    getById(id) {
        return this.items.get(id);
    }
    getAll() {
        return Array.from(this.items.values());
    }
    update(id, updates) {
        const existing = this.items.get(id);
        if (!existing)
            return undefined;
        const updated = { ...existing, ...updates };
        this.items.set(id, updated);
        return updated;
    }
    remove(id) {
        return this.items.delete(id);
    }
    findWhere(field, value) {
        for (const item of this.items.values()) {
            if (item[field] === value) {
                return item;
            }
        }
        return undefined;
    }
    filterWhere(field, value) {
        const result = [];
        for (const item of this.items.values()) {
            if (item[field] === value) {
                result.push(item);
            }
        }
        return result;
    }
}
