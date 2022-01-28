import {FullPage, Preloader, Slide} from '../../components';
import {useRef, useState} from 'react';
import {MainMovieView} from '../MainView/main.view';
import {useMovieData} from './hooks/useMovieData';
import {useSnackbar} from 'notistack';
import {getMovieImage} from '../../services/Movies/movies.service';
import classNames from 'classnames';

export const AppView = () => {
  const sliderRef = useRef();
  const mainMovieImageRef = useRef();
  const [animate, setAnimate] = useState(false);
  const {enqueueSnackbar} = useSnackbar();
  const handleError = () => {
    enqueueSnackbar('Something went wrong =(', {variant: 'error'});
  };

  const {isLoading, data: movieData} = useMovieData(handleError);

  const navigateToDetails = () => sliderRef.current.scrollNext();

  const afterScroll = items => {
    setAnimate(items.from === 0 && items.to === 1);
  };

  if (isLoading && !movieData) {
    return <Preloader />;
  }

  return (
    <div style={{position: 'relative'}}>
      <div className="main-view__floating-image">
        <img
          ref={mainMovieImageRef}
          src={getMovieImage(movieData.poster_path)}
          className={classNames('main-view__movie-image', {
            'main-view__movie-image-animate': animate,
          })}
        />
      </div>

      <FullPage
        ref={sliderRef}
        controls
        beforeChange={afterScroll}
        controlsProps={{className: 'slide-controls'}}>
        <Slide>
          <MainMovieView
            movie={movieData}
            navigateToDetails={navigateToDetails}
            animate={animate}
          />
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>
    </div>
  );
};
