import { Link } from "react-router-dom";

export default function MovieTile({ movie }) {
  return (
    <article className="movie-tile animate-scale-in">
      <Link to={`/player/${movie.id}`} className="movie-tile__cover">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-tile__badge">{movie.match}% relevante</div>
      </Link>

      <div className="movie-tile__content">
        <div className="movie-tile__top">
          <span>{movie.genre}</span>
          <span>{movie.maturityRating}+</span>
        </div>
        <h3>{movie.title}</h3>
        <p>{movie.tagline}</p>
      </div>
    </article>
  );
}
