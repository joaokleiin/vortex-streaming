import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../services/api";

export default function Player() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadMovie() {
      setIsLoading(true);
      const selectedMovie = await getMovieById(movieId);

      if (!isMounted) {
        return;
      }

      setMovie(selectedMovie);
      setIsLoading(false);
    }

    loadMovie();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  if (isLoading) {
    return <section className="page page--player">Carregando player...</section>;
  }

  if (!movie) {
    return (
      <section className="page page--player">
        <div className="player-panel">
          <h1>Filme nao encontrado</h1>
          <Link to="/" className="button button--primary">
            Voltar para a Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page page--player">
      <div className="player-layout">
        <div className="player-video">
          <video controls autoPlay playsInline poster={movie.backdrop}>
            <source src={movie.videoUrl} type="video/mp4" />
            Seu navegador nao suporta a tag de video.
          </video>
        </div>

        <aside className="player-panel">
          <span className="section-tag">Agora assistindo</span>
          <h1>{movie.title}</h1>
          <p className="player-panel__meta">
            {movie.match}% relevante - {movie.year} - {movie.duration}
          </p>
          <p>{movie.description}</p>
          <p className="player-panel__tagline">{movie.tagline}</p>

          <div className="player-panel__actions">
            <Link to="/" className="button button--primary">
              Voltar para a Home
            </Link>
            <Link to="/login" className="button button--dark">
              Salvar na lista
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
