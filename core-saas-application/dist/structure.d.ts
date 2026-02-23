export interface Workspace {
    readonly id: string;
    name: string;
    slug: string;
    description?: string;
    readonly createdAt: Date;
}
export interface Member {
    readonly id: string;
    readonly userName: string;
    name: string;
    email: string;
    joinedAt: Date;
}
export interface AdminMember extends Member {
    role: 'OWNER' | 'ADMIN';
    permissions: string[];
}
export interface Label {
    readonly id: string;
    name: string;
    hex: string;
}
export interface Project {
    readonly id: string;
    readonly workspaceId: string;
    name: string;
    status: 'ACTIVE' | 'COMPLETED' | 'ARCHIVED';
    labelIds: string[];
}
type TaskStatus = 'BACKLOG' | 'TODO' | 'IN_PROGRESS' | 'DONE';
type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export interface Task {
    readonly id: string;
    readonly projectId: string;
    readonly creatorId: string;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    asigneeId?: string;
    labelIds?: string[];
    dueDate?: Date;
    readonly createdAt: Date;
    updateAt: Date;
}
export {};
//# sourceMappingURL=structure.d.ts.map