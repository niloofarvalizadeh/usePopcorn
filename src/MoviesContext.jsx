import { useState, createContext, useContext } from "react";

// 1.create & export context
const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

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
