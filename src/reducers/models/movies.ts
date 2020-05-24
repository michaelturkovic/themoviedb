export interface MoviesState {
  loading: boolean;
  movies: IMovie[];
  errorMessage: string | null;
  movieDetails: IMovieDetails | null;
  ratedMovies: IMovie[]
}

export interface IMovie {
  id: number;
  original_title: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  original_language: string;
  rating: number | null;
}

export interface IMovieDetails extends IMovie {
  adult: boolean;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  imdb_id: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  revenue: number;
  spoken_languages: { iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  runtime: number;
}
