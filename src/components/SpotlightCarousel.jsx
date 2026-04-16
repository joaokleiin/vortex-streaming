import { useEffect, useRef, useState } from "react";
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (movies.length > 1 && isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => wrapIndex(prevIndex + 1, movies.length));
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [movies.length, isAutoPlaying]);

  // Reset active index when movies change
  useEffect(() => {
    setActiveIndex(0);
  }, [movies]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation functions
  const goToSlide = (index) => {
    setActiveIndex(wrapIndex(index, movies.length));
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => wrapIndex(prevIndex - 1, movies.length));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => wrapIndex(prevIndex + 1, movies.length));
  };

  const getSlidePosition = (index) => {
    const offset = wrapIndex(index - activeIndex, movies.length);

    if (offset === 0) return 'center';
    if (offset === 1) return 'right';
    if (offset === movies.length - 1) return 'left';
    if (offset === 2) return 'far-right';
    if (offset === movies.length - 2) return 'far-left';

    return 'hidden';
  };

  if (movies.length === 0) {
    return null;
  }

  const activeMovie = movies[activeIndex];

  return (
    <section className="trending-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__content">
            <span className="section-tag">Em alta agora</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>

        </div>

        {/* Main Content */}
        <div className="trending-content">
          {/* Coverflow Carousel */}
          <div
            className="movie-carousel"
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="carousel-track">
              {movies.map((movie, index) => {
                const position = getSlidePosition(index);
                const isHidden = position === 'hidden';

                return (
                  <div
                    key={movie.id}
                    className={`movie-card movie-card--${position}`}
                    onClick={() => goToSlide(index)}
                    aria-current={position === 'center' ? 'true' : undefined}
                    tabIndex={isHidden ? -1 : 0}
                  >
                    <div className="movie-card__image">
                      <img src={movie.poster} alt={movie.title} loading="lazy" />
                      <div className="movie-card__overlay">
                        <div className="movie-card__play-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="movie-card__info">
                      <h4 className="movie-card__title">{movie.title}</h4>
                      <div className="movie-card__meta">
                        <span>{movie.match}% relevante</span>
                        <span>{movie.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
