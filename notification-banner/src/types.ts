export interface SuccessNotification {
  type: 'success';
  message: string;
  duration: number;
}

export interface ErrorNotification {
  type: 'error';
  message: string;
  errorCode: number;
}

export interface InfoNotification {
  type: 'info';
  message: string;
  source: string;
}

export interface WarningNotification {
  type: 'warning';
  message: string;
  retryAfter?: number;
}

export type Notification =
  | SuccessNotification
  | ErrorNotification
  | InfoNotification
  | WarningNotification;
