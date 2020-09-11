let movies = [
  { id: 0, name: "Moive 1", score: 3 },
  { id: 1, name: "Moive 2", score: 5 },
  { id: 2, name: "Moive 3", score: 7 },
  { id: 3, name: "Moive 4", score: 1 },
];

export const getMoives = () => movies;

export const getById = (id) => {
  const filteredMoives = movies.filter((moive) => moive.id == id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id != id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: int(`${movies.length + 1}`),
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
