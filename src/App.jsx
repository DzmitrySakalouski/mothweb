import {useEffect} from 'react';
import {configureAxios} from './utils';
import './index.scss';
import {AppView} from './views/AppView/app.view';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SnackbarProvider} from 'notistack';

const client = new QueryClient();

function App() {
  useEffect(() => {
    configureAxios();
  }, []);

  return (
    <SnackbarProvider>
      <QueryClientProvider client={client}>
        <AppView />
      </QueryClientProvider>
    </SnackbarProvider>
  );
}

export default App;
