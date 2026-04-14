import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function wrapIndex(index, total) {
  return (index + total) % total;
}

export default function SpotlightCarousel({
  title,
  subtitle,
  movies = []
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [movies]);

  const slides = useMemo(() => {
    if (movies.length === 0) {
      return [];
    }

    return [
      movies[wrapIndex(activeIndex - 1, movies.length)],
      movies[activeIndex],
      movies[wrapIndex(activeIndex + 1, movies.length)]
    ];
  }, [activeIndex, movies]);

  if (movies.length === 0) {
    return null;
  }

  const activeMovie = movies[activeIndex];

  return (
    <section className="spotlight">
      <div className="section-heading">
        <div>
          <span className="section-tag">Momento premium</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="spotlight__actions">
          <button
            type="button"
            className="slider-control"
            onClick={() => setActiveIndex((index) => wrapIndex(index - 1, movies.length))}
            aria-label="Filme anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="slider-control"
            onClick={() => setActiveIndex((index) => wrapIndex(index + 1, movies.length))}
            aria-label="Proximo filme"
          >
            ›
          </button>
        </div>
      </div>

      <div className="spotlight__layout">
        <div className="spotlight__stage" aria-label={title}>
          {slides.map((movie, index) => {
            const state =
              index === 1 ? "spotlight-card--center" : "spotlight-card--side";

            return (
              <button
                key={`${movie.id}-${state}`}
                type="button"
                className={`spotlight-card ${state}`}
                onClick={() => setActiveIndex(movies.findIndex((item) => item.id === movie.id))}
                style={{ backgroundImage: `url(${movie.poster})` }}
              >
                <span className="spotlight-card__scrim" />
                <span className="spotlight-card__title">{movie.title}</span>
              </button>
            );
          })}
        </div>

        <aside className="spotlight__panel">
          <span className="section-tag">No centro da tela</span>
          <h3>{activeMovie.title}</h3>
          <p className="spotlight__meta">
            {activeMovie.match}% relevante • {activeMovie.year} • {activeMovie.genre}
          </p>
          <p>{activeMovie.description}</p>
          <div className="spotlight__panel-actions">
            <Link to={`/player/${activeMovie.id}`} className="button button--primary">
              Abrir player
            </Link>
            <button
              type="button"
              className="button button--dark"
              onClick={() => setActiveIndex((index) => wrapIndex(index + 1, movies.length))}
            >
              Ver proximo
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
