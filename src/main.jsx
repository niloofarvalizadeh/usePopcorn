import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./StarRating";
import { MoviesProvider } from "./MoviesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
    {/* <StarRating maxRating={5} defaultRating={3}  /> */}
  </StrictMode>
);
