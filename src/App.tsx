import { useRoutes } from 'react-router';
import { routes } from './routes/routes';

const App = () => {
  const content = useRoutes(routes);
  return content;
};

export default App;
