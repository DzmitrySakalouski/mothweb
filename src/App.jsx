import {useEffect} from 'react';
// import {configureAxios} from './utils';
import './index.scss';
import {AppView} from './views/AppView/app.view';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SnackbarProvider} from 'notistack';

const client = new QueryClient();

function App() {
  useEffect(() => {
    // </SnackbarProvider>();
  }, []);

  return (
    <QueryClientProvider client={client}>
      <SnackbarProvider>
        <AppView />
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default App;
