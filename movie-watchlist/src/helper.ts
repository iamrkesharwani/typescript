import type {
  Movie,
  FilterByGenreFn,
  SortByRatingFn,
  GetUnwatchedFn,
} from './types.js';

export const filterByGenre: FilterByGenreFn = (movies, genre) => {
  return movies.filter((movie: Movie): boolean => movie.genres.includes(genre));
};

export const sortByRating: SortByRatingFn = (movies) => {
  return [...movies].sort((a: Movie, b: Movie): number => b.rating - a.rating);
};

export const getUnwatched: GetUnwatchedFn = (movies) => {
  return movies.filter(
    (movie: Movie): boolean => movie.watchedAt === undefined
  );
};
