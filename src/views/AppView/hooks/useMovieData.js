import {useQuery} from 'react-query';

export const useMovieData = () => {
  const cacheKey = 'primary_movie';
  const {isLoading, data} = useQuery(cacheKey);

  return {
    isLoading,
    data,
  };
};
