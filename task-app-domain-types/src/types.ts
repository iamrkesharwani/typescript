type Status = 'todo' | 'inProgress' | 'done';
type AdminRole = 'superAdmin' | 'projectAdmin';

export interface User {
  readonly id: string;
  name: string;
  email: string;
  readonly createdAt: Date;
}

export interface Label {
  readonly id: string;
  name: string;
}

export interface Task {
  readonly id: string;
  title: string;
  status: Status;
  labelIds: string[];
  readonly createdAt: Date;
}

export interface Project {
  readonly id: string;
  name: string;
  description: string;
  taskIds: string[];
  ownerId: string;
  readonly createdAt: Date;
}

export interface AdminUser extends User {
  role: AdminRole;
  permissions: string[];
}
