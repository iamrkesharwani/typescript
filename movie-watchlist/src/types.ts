type Genre = 'action' | 'comedy' | 'drama' | 'sciFi' | 'horror' | 'thriller';

export interface Movie {
  readonly id: string;
  title: string;
  year: number;
  genres: Genre[];
  rating: number;
  watchedAt?: Date;
}

export type FilterByGenreFn = (movies: Movie[], genre: Genre) => Movie[];
export type SortByRatingFn = (movies: Movie[]) => Movie[];
export type GetUnwatchedFn = (movies: Movie[]) => Movie[];
export type Coordinates = [latitude: number, longitude: number];
