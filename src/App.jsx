import {useEffect} from 'react';
import {configureAxios} from './utils';
import './index.scss';
import {AppView} from './views/AppView/app.view';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();

function App() {
  useEffect(() => {
    configureAxios();
  }, []);

  return (
    <QueryClientProvider client={client}>
      <AppView />
    </QueryClientProvider>
  );
}

export default App;
