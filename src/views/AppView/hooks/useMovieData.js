import {useQuery} from 'react-query';
import {fetchMovie} from '../../../services/Movies/movies.service';

export const useMovieData = () => {
  const cacheKey = 'primary_movie';

  return useQuery(cacheKey, fetchMovie);
};
