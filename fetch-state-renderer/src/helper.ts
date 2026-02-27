import type { AsyncState } from './types.js';

export function render<T>(state: AsyncState<T>): string {
  switch (state.state) {
    case 'idle':
      return 'Nothing started yet';
    case 'loading':
      return 'Loading...';
    case 'success':
      return `Success: ${JSON.stringify(state.data)}`;
    case 'error':
      return `Error: ${state.message}`;
    default:
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
  }
}
