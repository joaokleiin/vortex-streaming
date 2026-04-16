import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ContinueWatching({ items = [] }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) {
      return undefined;
    }

    const step = Math.max(track.clientWidth * 0.4, 240);
    const intervalId = window.setInterval(() => {
      if (!track) {
        return;
      }

      const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (isAtEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: step, behavior: "smooth" });
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="continue-watching">
      <div className="section-heading continue-watching__header">
        <div>
          <span className="section-tag">Retome rapido</span>
          <h2>Continue assistindo</h2>
          <p>Volte aos titulos com progresso visivel, interacao suave e estilo premium.</p>
        </div>
      </div>

      <div className="continue-watching__carousel">
        <div className="continue-watching__track" ref={trackRef}>
          {items.map((item) => (
            <article className="continue-card" key={item.id}>
              <div
                className="continue-card__image"
                style={{ backgroundImage: `url(${item.backdrop || item.poster})` }}
              >
                <div className="continue-card__header">
                  <span className="continue-card__genre">{item.genre}</span>
                  <span className="continue-card__remaining">{item.remainingLabel}</span>
                </div>
                <span className="continue-card__badge">{item.watchedLabel}</span>
                <div className="continue-card__hover-actions">
                  <Link to={`/player/${item.id}`} className="button button--primary">
                    Continuar
                  </Link>
                </div>
              </div>

              <div className="continue-card__content">
                <div className="continue-card__content-top">
                  {item.year && <span className="continue-card__pill">{item.year}</span>}
                  {item.duration && <span className="continue-card__pill">{item.duration}</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.tagline || item.description}</p>

                <div className="continue-card__progress-block">
                  <div className="continue-card__progress-label">
                    <span>Assistido {item.progress}%</span>
                    <span>{item.remainingLabel}</span>
                  </div>
                  <div className="continue-card__progress-track" aria-hidden="true">
                    <span
                      className="continue-card__progress-bar"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
