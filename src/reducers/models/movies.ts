export interface MoviesState {
  loading: boolean;
  movies: IMovie[];
  errorMessage: string | null;
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
