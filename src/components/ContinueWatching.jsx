import { Link } from "react-router-dom";

export default function ContinueWatching({ items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="continue-watching">
      <div className="section-heading">
        <div>
          <span className="section-tag">Retome rapido</span>
          <h2>Continue assistindo</h2>
          <p>Uma lista mais visual, com contexto e progresso para cada titulo.</p>
        </div>
      </div>

      <div className="continue-watching__list">
        {items.map((movie) => (
          <article className="continue-card" key={movie.id}>
            <div className="continue-card__media">
              <img src={movie.backdrop} alt={movie.title} />
              <span className="continue-card__badge">{movie.watchedLabel}</span>
            </div>

            <div className="continue-card__content">
              <div className="continue-card__topline">
                <span className="continue-card__genre">{movie.genre}</span>
                <span className="continue-card__remaining">{movie.remainingLabel}</span>
              </div>

              <h3>{movie.title}</h3>
              <p>{movie.description}</p>

              <div className="continue-card__progress-block">
                <div className="continue-card__progress-label">
                  <span>Progresso</span>
                  <span>{movie.progress}%</span>
                </div>
                <div className="continue-card__progress-track" aria-hidden="true">
                  <span
                    className="continue-card__progress-bar"
                    style={{ width: `${movie.progress}%` }}
                  />
                </div>
              </div>

              <div className="continue-card__actions">
                <Link to={`/player/${movie.id}`} className="button button--primary">
                  Continuar
                </Link>
                <Link to="/cadastro" className="button button--dark">
                  Minha lista
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
