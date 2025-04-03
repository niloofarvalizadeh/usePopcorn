import { useState, createContext, useContext, Children } from "react";
import { tempMovieData, tempWatchedData } from "./data";

// 1.create & export context
const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <MoviesContext.Provider value={{ movies, setMovies, watched, setWatched }}>
      {children}
    </MoviesContext.Provider>
  );
}

// 2.create a hook for using context
export function useMovies() {
  return useContext(MoviesContext);
}
