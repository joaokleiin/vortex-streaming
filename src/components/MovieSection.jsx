import { useMemo, useState } from "react";
import MovieTile from "./MovieTile";

export default function MovieSection({ title, subtitle, movies = [] }) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(movies.map((movie) => movie.genre || "Outros")));
    return ["Todos", ...unique];
  }, [movies]);

  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredMovies = useMemo(() => {
    if (activeCategory === "Todos") {
      return movies;
    }

    return movies.filter((movie) => movie.genre === activeCategory);
  }, [activeCategory, movies]);

  return (
    <section className="movie-section">
      <div className="container">
        <div className="movie-section__header">
          <div>
            <span className="section-tag">Lançamentos</span>
            <h2>{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>

          <div className="movie-section__filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-pill ${activeCategory === category ? "filter-pill--active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="movie-section__grid">
          {filteredMovies.map((movie) => (
            <MovieTile key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
