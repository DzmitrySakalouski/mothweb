import {FullPage, Slide} from '../../components';
import {useRef} from 'react';
import {MainMovieView} from '../MainView/main.view';
import {useMovieData} from './hooks/useMovieData';

export const AppView = () => {
  const sliderRef = useRef();

  const {isLoading} = useMovieData();

  const navigateToDetails = () => sliderRef.current.scrollNext();

  if (isLoading) {
    return;
  }

  return (
    <FullPage
      ref={sliderRef}
      controls
      controlsProps={{className: 'slide-controls'}}>
      <Slide>
        <MainMovieView movie={null} navigateToDetails={navigateToDetails} />
      </Slide>
      <Slide>
        <h1>Another slide content</h1>
      </Slide>
    </FullPage>
  );
};
