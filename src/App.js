import './App.css';
import Youtube from './components/Youtube';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Youtube />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
