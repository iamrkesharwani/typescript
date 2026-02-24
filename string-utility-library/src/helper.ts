import type {
  CapitalizeFn,
  TruncateFn,
  SlugifyFn,
  CountWordsFn,
  PadStartFn,
} from './types.js';

export const capitalize: CapitalizeFn = (input) => {
  return input.toUpperCase();
};

export const truncate: TruncateFn = (input) => {
  if (input.length <= 3) return input;
  return input.slice(0, 3) + '...';
};

export const slugify: SlugifyFn = (input) => {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]+/g, '')
    .replace(/-+/g, '-');
};

export const countWords: CountWordsFn = (input) => {
  return input.trim().split(/\s+/).length;
};

export const padStart: PadStartFn = (input) => {
  return input.toString().padStart(2, '0');
};
