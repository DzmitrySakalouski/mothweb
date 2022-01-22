import {PageItem} from './components/PageItem';
import './main.view.scss';

export const MainMovieView = () => {
  const press = () => {
    location.href = 'http://localhost:3000/#slide-1';
  };

  return (
    <PageItem href="#slide-0" styleClass="red">
      <a href="#slide-1">Click next</a>
      <div onClick={press}>On press</div>
    </PageItem>
  );
};
