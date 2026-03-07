export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'done';
}

export interface Project {
  id: string;
  name: string;
}

