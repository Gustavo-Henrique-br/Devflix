export interface Movie {
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  title: string;
  vote_count?: number;
  vote_average?: number;
  video?: boolean;
  release_date: string;
  overview: string;
  original_title: string;
  poster_path?: string;
  original_language: string;
  popularity?: number;
  media_type?: string;
}

export interface Res {
  page: number;
  results: Movie[]; 
}