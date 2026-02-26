import { filterByGenre, getUnwatched, sortByRating } from './index.js';
import type { Movie, Coordinates } from './index.js';

const movies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    year: 2010,
    genres: ['sciFi', 'thriller'],
    rating: 9,
    watchedAt: new Date(),
  },
  {
    id: '2',
    title: 'Interstellar',
    year: 2014,
    genres: ['sciFi', 'drama'],
    rating: 8.5,
  },
  {
    id: '3',
    title: 'The Dark Knight',
    year: 2008,
    genres: ['action', 'drama'],
    rating: 9.2,
    watchedAt: new Date(),
  },
];

const theatreLocation: Coordinates = [22.5726, 88.3639];

console.log('Sci-Fi Movies:');
console.log(filterByGenre(movies, 'sciFi'));

console.log('Sorted By Rating:');
console.log(sortByRating(movies));

console.log('Unwatched Movies:');
console.log(getUnwatched(movies));

console.log('Theatre Location:', theatreLocation);
