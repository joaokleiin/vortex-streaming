import { Link } from "react-router-dom";

export default function HeroSection({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <section className="hero-section">
      <div className="container hero-section__inner">
        <div className="hero-section__content">
          <span className="hero-section__eyebrow">Plataforma Premium</span>
          <h1 className="hero-section__title">Unlimited Movies, TV Shows & More</h1>
          <p className="hero-section__description">Experimente um mundo de entretenimento curado para quem busca intensidade visual, narrativas imersivas e lançamentos exclusivos.</p>

          <div className="hero-section__meta">
            <span className="hero-section__pill">{movie.genre}</span>
            <span className="hero-section__pill">{movie.year}</span>
            <span className="hero-section__pill">{movie.duration}</span>
            <span className="hero-section__pill">{movie.match}% relevante</span>
          </div>

          <div className="hero-section__actions">
            <Link to={`/player/${movie.id}`} className="button button--primary">
              Assistir agora
            </Link>
            <Link to={`/player/${movie.id}`} className="button button--secondary">
              Ver mais
            </Link>
          </div>
        </div>

        <div className="hero-section__visual">
          <div className="hero-section__visual-card">
            <span className="hero-section__card-tag">Em destaque</span>
            <img src={movie.backdrop || movie.poster} alt={movie.title} />
            <div className="hero-section__visual-info">
              <strong>{movie.title}</strong>
              <p>{movie.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
