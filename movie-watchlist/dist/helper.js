export const filterByGenre = (movies, genre) => {
    return movies.filter((movie) => movie.genres.includes(genre));
};
export const sortByRating = (movies) => {
    return [...movies].sort((a, b) => b.rating - a.rating);
};
export const getUnwatched = (movies) => {
    return movies.filter((movie) => movie.watchedAt === undefined);
};
