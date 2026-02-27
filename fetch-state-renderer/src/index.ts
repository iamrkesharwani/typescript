import { render } from './helper.js';
import type { AsyncState } from './types.js';

let successFlow: AsyncState<string> = { state: 'idle' };
console.log(render(successFlow));

successFlow = { state: 'loading' };
console.log(render(successFlow));

successFlow = { state: 'success', data: 'User data loaded' };
console.log(render(successFlow));

let errorFlow: AsyncState<string> = { state: 'idle' };
console.log(render(errorFlow));

errorFlow = { state: 'loading' };
console.log(render(errorFlow));

errorFlow = { state: 'error', message: 'Network request failed' };
console.log(render(errorFlow));
