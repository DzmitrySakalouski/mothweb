import classNames from 'classnames';
import {Button} from '../../components';
import {getMovieImage} from '../../services/Movies/movies.service';

export const MainMovieView = ({movie, navigateToDetails, animatedStyle}) => {
  const movieImageUrl = getMovieImage(movie.poster_path);

  return (
    <div
      className={classNames('main-view__container', {
        [animatedStyle]: !!animatedStyle,
      })}>
      <img
        src={movieImageUrl}
        className="main-view__bg"
        style={{background: `uri("${movieImageUrl}")`}}
      />
      <div className="main-view__items">
        {/* <img src={movieImageUrl} className="main-view__movie-image" /> */}
        <div className="main-view__movie-image-simulator" />
        <Button title="View details" onPress={navigateToDetails} />
      </div>
    </div>
  );
};
