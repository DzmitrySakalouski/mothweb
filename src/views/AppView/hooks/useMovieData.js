import {useQuery} from 'react-query';
import {fetchMovie} from '../../../services/Movies/movies.service';

export const useMovieData = onError => {
  const cacheKey = 'primary_movie';

  return useQuery(cacheKey, fetchMovie, {
    onError: () => onError(),
  });
};
