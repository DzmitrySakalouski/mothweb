import {useEffect} from 'react';
import {configureAxios} from './utils';
import {MainMovieView} from './views/MainView/main.view';
import './index.css';

function App() {
  useEffect(() => {
    configureAxios();
  }, []);

  return (
    <div>
      <MainMovieView />
    </div>
  );
}

export default App;
