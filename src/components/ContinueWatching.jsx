import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ContinueWatching({ items = [] }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    function updateControls() {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      setCanScrollLeft(track.scrollLeft > 12);
      setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 12);
    }

    updateControls();

    const track = trackRef.current;
    if (!track) {
      return;
    }

    track.addEventListener("scroll", updateControls);
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [items.length]);

  const scrollTrack = (distance) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    track.scrollBy({ left: distance, behavior: "smooth" });
  };

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

        <div className="continue-watching__nav">
          <button
            type="button"
            className="slider-control continue-watching__arrow"
            onClick={() => scrollTrack(trackRef.current?.clientWidth * -0.72)}
            aria-label="Rolar para itens anteriores"
            disabled={!canScrollLeft}
          >
            ‹
          </button>
          <button
            type="button"
            className="slider-control continue-watching__arrow"
            onClick={() => scrollTrack(trackRef.current?.clientWidth * 0.72)}
            aria-label="Rolar para itens seguintes"
            disabled={!canScrollRight}
          >
            ›
          </button>
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
