import '../MainView/main.view.scss';
import {FullPage, Slide} from 'react-full-page';

export const AppView = () => {
  return (
    <FullPage controls controlsProps={{className: 'slide-controls'}}>
      <Slide>
        <h1>Inner slide content</h1>
      </Slide>
      <Slide>
        <h1>Another slide content</h1>
      </Slide>
    </FullPage>
  );
};
