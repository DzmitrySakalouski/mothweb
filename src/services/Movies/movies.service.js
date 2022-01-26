import {IMAGE_BASE_URL} from '../../constants';
import {axiosInstance} from '../../utils';

// import moment from 'moment';

export const fetchMovie = async () => {
  try {
    const randomPage = Math.floor(Math.random() * 500);

    const randomPageMovies = await axiosInstance.get('/movie/popular', {
      params: {page: randomPage},
    });

    console.log('randomPageMovies', randomPageMovies);

    if (randomPageMovies?.results?.length) {
      const randomMovieIndexFromRange = Math.floor(
        Math.random() * (randomPageMovies.results.length - 1),
      );

      console.log('randomMovieIndexFromRange', randomMovieIndexFromRange);
      const movieToDisplay =
        randomPageMovies.results[randomMovieIndexFromRange];
      const video = await getMovieVideo(movieToDisplay.id);

      console.log('movie');
      const movie = await getMovieDetails(movieToDisplay.id);
      movie.video = video.results[0];

      return movie;
    }

    return null;
  } catch (error) {
    console.log({...error});

    return error;
  }
};

const getMovieDetails = async id => {
  try {
    const data = await axiosInstance.get(`/movie/${id}`);

    return data;
  } catch (error) {
    return error;
  }
};

export const getMovieVideo = async id => {
  try {
    const data = await axiosInstance.get(`/movie/${id}/videos`);

    return data;
  } catch (error) {
    return error;
  }
};

export const getMovieImage = path => `${IMAGE_BASE_URL}${path}`;

export const getCast = async movieId => {
  try {
    return await axiosInstance.get(`/movie/${movieId}/credits`);
  } catch (error) {
    return error;
  }
};

export const getRecommendedMovies = async id => {
  try {
    return await axiosInstance.get(`/movie/${id}/recommendations`);
  } catch (error) {
    return error;
  }
};

export const buildTrailerUrl = video => {
  if (video.site === 'YouTube') {
    return `https://www.youtube.com/watch?v=${video.key}`;
  }

  return null;
};
