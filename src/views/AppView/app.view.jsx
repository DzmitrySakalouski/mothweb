import {FullPage, Preloader, Slide} from '../../components';
import {useRef} from 'react';
import {MainMovieView} from '../MainView/main.view';
import {useMovieData} from './hooks/useMovieData';
import {useSnackbar} from 'notistack';

export const AppView = () => {
  const sliderRef = useRef();
  const {enqueueSnackbar} = useSnackbar();
  const handleError = () => {
    enqueueSnackbar('Something went wrong =(', {variant: 'error'});
  };

  const {isLoading, data: movieData} = useMovieData(handleError);

  const navigateToDetails = () => sliderRef.current.scrollNext();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <FullPage
      ref={sliderRef}
      controls
      controlsProps={{className: 'slide-controls'}}>
      <Slide>
        <MainMovieView
          movie={movieData}
          navigateToDetails={navigateToDetails}
        />
      </Slide>
      <Slide>
        <h1>Another slide content</h1>
      </Slide>
    </FullPage>
  );
};
