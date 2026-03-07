export class ApiError extends Error {
  status: number;
  body: unknown;
  constructor(status: number, body: unknown) {
    super(`API returned status ${status}`);
    this.status = status;
    this.body = body;
    this.name = 'ApiError';
  }
}
