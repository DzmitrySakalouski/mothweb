import classNames from 'classnames';
import {Button} from '../../components';
import {getMovieImage} from '../../services/Movies/movies.service';

export const MainMovieView = ({movie, navigateToDetails, animate}) => {
  const movieImageUrl = getMovieImage(movie.poster_path);

  return (
    <div
      className={classNames('main-view__container', {
        'main-view__container-animate': animate,
      })}>
      <img
        src={movieImageUrl}
        className="main-view__bg"
        style={{background: `uri("${movieImageUrl}")`}}
      />
      <div className="main-view__items">
        <div className="main-view__movie-image-simulator" />
        <Button
          className={classNames('main-view__button', {
            'main-view__button-animate': animate,
          })}
          title="View details"
          onPress={navigateToDetails}
        />
      </div>
    </div>
  );
};
