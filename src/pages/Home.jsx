import { useEffect, useState } from "react";
import ContinueWatching from "../components/ContinueWatching";
import HeroSlider from "../components/HeroSlider";
import SpotlightCarousel from "../components/SpotlightCarousel";
import {
  getContinueWatching,
  getHeroMovies,
  getMovieRows
} from "../services/api";

export default function Home() {
  const [heroMovies, setHeroMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
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

      const trendingRow = rows.find((row) => row.id === "trending");

      setHeroMovies(hero);
      setTrendingMovies(trendingRow?.movies ?? []);
      setContinueWatching(continueItems);
      setIsLoading(false);
    }

    loadHomeData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="page page--home">
      <HeroSlider movies={heroMovies} />

      <div className="home-sections">
        <SpotlightCarousel
          title="Em alta agora"
          subtitle="Um destaque central com profundidade e troca animada entre os titulos."
          movies={trendingMovies}
        />

        <ContinueWatching items={continueWatching} />
      </div>

      {isLoading && <p className="page__status">Carregando experiencia...</p>}
    </div>
  );
}
