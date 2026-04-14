import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function wrapIndex(index, total) {
  if (total === 0) {
    return 0;
  }

  return (index + total) % total;
}

export default function HeroSlider({ movies = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (movies.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => wrapIndex(currentIndex + 1, movies.length));
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [movies.length]);

  useEffect(() => {
    setActiveIndex(0);
  }, [movies]);

  if (movies.length === 0) {
    return (
      <section className="hero-slider hero-slider--loading">
        <div className="hero-slider__inner">
          <div className="hero-slider__content">
            <span className="section-tag">Carregando destaque</span>
            <h1>Preparando a proxima sessao...</h1>
          </div>
        </div>
      </section>
    );
  }

  const activeMovie = movies[activeIndex];

  const goToSlide = (index) => {
    setActiveIndex(wrapIndex(index, movies.length));
  };

  return (
    <section className="hero-slider">
      <div className="hero-slider__backdrops" aria-hidden="true">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`hero-slider__backdrop ${
              index === activeIndex ? "hero-slider__backdrop--active" : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(5, 6, 10, 0.94) 22%, rgba(5, 6, 10, 0.48) 58%, rgba(5, 6, 10, 0.9) 100%), url(${movie.backdrop})`
            }}
          />
        ))}
      </div>

      <div className="hero-slider__inner">
        <div className="hero-slider__content" key={activeMovie.id}>
          <span className="section-tag">Destaque em movimento</span>
          <h1>{activeMovie.title}</h1>
          <p className="hero-slider__tagline">{activeMovie.tagline}</p>
          <div className="hero-slider__meta">
            <span>{activeMovie.match}% relevante</span>
            <span>{activeMovie.year}</span>
            <span>{activeMovie.duration}</span>
            <span>{activeMovie.genre}</span>
          </div>
          <p className="hero-slider__description">{activeMovie.description}</p>

          <div className="hero-slider__actions">
            <Link to={`/player/${activeMovie.id}`} className="button button--light">
              Assistir agora
            </Link>
            <Link to="/cadastro" className="button button--dark">
              Fazer cadastro
            </Link>
          </div>
        </div>

        <div className="hero-slider__controls">
          <div className="hero-slider__dots">
            {movies.map((movie, index) => (
              <button
                key={movie.id}
                type="button"
                className={`hero-slider__dot ${
                  index === activeIndex ? "hero-slider__dot--active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para ${movie.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
