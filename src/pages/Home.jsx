import { useEffect, useState } from "react";
import ContinueWatching from "../components/ContinueWatching";
import HeroSection from "../components/HeroSection";
import MovieSection from "../components/MovieSection";
import { getContinueWatching, getHeroMovies, getMovieRows } from "../services/api";

export default function Home() {
  const [heroMovie, setHeroMovie] = useState(null);
  const [movieRows, setMovieRows] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadHomeData() {
      setIsLoading(true);

      const [hero, rows, continueItems] = await Promise.all([
        getHeroMovies(),
        getMovieRows(),
        getContinueWatching()
      ]);

      if (!isMounted) {
        return;
      }

      setHeroMovie(hero[0] ?? null);
      setMovieRows(rows);
      setContinueWatching(continueItems);
      setIsLoading(false);
    }

    loadHomeData();

    return () => {
      isMounted = false;
    };
  }, []);

  const trendingRow = movieRows.find((row) => row.id === "trending");

  return (
    <div className="page page--home">
      <HeroSection movie={heroMovie} />

      <main className="home-sections">
        <MovieSection
          title="New Release Movies"
          subtitle="Descubra os lançamentos com visual cinematográfico e categorias selecionadas."
          movies={trendingRow?.movies ?? []}
        />

        <ContinueWatching items={continueWatching} />
      </main>

      {isLoading && <p className="page__status">Carregando experiencia...</p>}
    </div>
  );
}
