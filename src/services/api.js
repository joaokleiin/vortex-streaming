const movieCatalog = {
  eclipse: {
    id: "eclipse",
    title: "Eclipse Protocol",
    tagline: "Quando a cidade apaga, os segredos finalmente acendem.",
    description:
      "Uma engenheira de redes descobre um experimento clandestino que pode desligar uma metropole inteira em poucos segundos.",
    genre: "Sci-Fi Thriller",
    year: 2026,
    duration: "2h 04min",
    maturityRating: "14",
    match: 98,
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  horizon: {
    id: "horizon",
    title: "Neon Horizon",
    tagline: "O futuro nunca esteve tao perto do caos.",
    description:
      "Em uma metropole guiada por IA, uma DJ hacker usa transmissoes piratas para despertar a cidade contra um algoritmo autoritario.",
    genre: "Cyberpunk",
    year: 2025,
    duration: "1h 53min",
    maturityRating: "16",
    match: 96,
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  tides: {
    id: "tides",
    title: "Midnight Tides",
    tagline: "Toda mare devolve algo que preferiamos esquecer.",
    description:
      "Uma investigadora retorna a cidade costeira onde perdeu o pai para descobrir por que barcos fantasmas continuam surgindo na mesma madrugada.",
    genre: "Mystery",
    year: 2024,
    duration: "1h 48min",
    maturityRating: "12",
    match: 93,
    poster:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=600&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  pulse: {
    id: "pulse",
    title: "Last Pulse",
    tagline: "Um batimento fora do ritmo pode mudar o destino.",
    description:
      "Depois de uma tempestade solar, uma medica precisa atravessar Sao Paulo sem tecnologia para entregar o unico desfibrilador funcional da cidade.",
    genre: "Drama",
    year: 2025,
    duration: "2h 12min",
    maturityRating: "12",
    match: 91,
    poster:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=600&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  vault: {
    id: "vault",
    title: "Shadow Vault",
    tagline: "A memoria mais perigosa e a que ainda nao foi aberta.",
    description:
      "Um arquivista clandestino invade cofres digitais que armazenam lembrancas confiscadas pelo governo.",
    genre: "Action",
    year: 2026,
    duration: "1h 59min",
    maturityRating: "16",
    match: 95,
    poster:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=600&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  },
  ember: {
    id: "ember",
    title: "Silent Ember",
    tagline: "As brasas contam a historia antes do incendio.",
    description:
      "Uma bombeira forense investiga uma serie de incendios coreografados que parecem mensagens codificadas.",
    genre: "Crime",
    year: 2024,
    duration: "1h 45min",
    maturityRating: "14",
    match: 89,
    poster:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
  },
  circuit: {
    id: "circuit",
    title: "Broken Circuit",
    tagline: "A corrida comeca quando o sistema deixa de obedecer.",
    description:
      "Pilotos de drones clandestinos disputam rotas aereas em uma cidade vertical enquanto fogem de uma corporacao militar.",
    genre: "Adventure",
    year: 2026,
    duration: "2h 01min",
    maturityRating: "12",
    match: 90,
    poster:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
  },
  signal: {
    id: "signal",
    title: "Ghost Signal",
    tagline: "Nem toda transmissao quer ser encontrada.",
    description:
      "Um tecnico de radio capta uma frequencia que antecipa crimes com minutos de antecedencia e vira alvo de quem controla o sinal.",
    genre: "Suspense",
    year: 2025,
    duration: "1h 50min",
    maturityRating: "16",
    match: 94,
    poster:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
  }
};

const heroMovieIds = ["eclipse", "horizon", "vault", "signal"];

const movieRows = [
  {
    id: "trending",
    title: "Em alta agora",
    subtitle: "Um destaque cinematografico com profundidade e troca suave.",
    movieIds: ["eclipse", "horizon", "signal", "vault", "pulse"]
  },
  {
    id: "continue",
    title: "Continue assistindo",
    subtitle: "Retome historias cheias de tensao e ficcao.",
    movieIds: ["tides", "pulse", "ember", "signal", "circuit"]
  }
];

const continueWatching = [
  {
    movieId: "tides",
    progress: 36,
    watchedLabel: "Assistido ontem",
    remainingLabel: "Faltam 1h 07min"
  },
  {
    movieId: "pulse",
    progress: 64,
    watchedLabel: "Retomado hoje",
    remainingLabel: "Faltam 46min"
  },
  {
    movieId: "ember",
    progress: 18,
    watchedLabel: "Visto ha 3 dias",
    remainingLabel: "Faltam 1h 24min"
  },
  {
    movieId: "signal",
    progress: 82,
    watchedLabel: "Quase no final",
    remainingLabel: "Faltam 18min"
  }
];

const wait = (delay = 250) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, delay);
  });

const mapMovies = (movieIds) =>
  movieIds.map((movieId) => movieCatalog[movieId]).filter(Boolean);

const mapRowMovies = (row) => ({
  ...row,
  movies: mapMovies(row.movieIds)
});

export async function getMovieRows() {
  await wait();
  return movieRows.map(mapRowMovies);
}

export async function getHeroMovies() {
  await wait(120);
  return mapMovies(heroMovieIds);
}

export async function getContinueWatching() {
  await wait(180);
  return continueWatching
    .map((item) => ({
      ...movieCatalog[item.movieId],
      progress: item.progress,
      watchedLabel: item.watchedLabel,
      remainingLabel: item.remainingLabel
    }))
    .filter(Boolean);
}

export async function getMovieById(movieId) {
  await wait(150);
  return movieCatalog[movieId] ?? null;
}
