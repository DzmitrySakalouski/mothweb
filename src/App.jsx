import {useEffect} from 'react';
import {configureAxios} from './utils';

function App() {
  useEffect(() => {
    configureAxios();
  }, []);

  return <h1>Hello</h1>;
}

export default App;
