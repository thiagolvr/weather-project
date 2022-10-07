import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import CityForecast from '../pages/CityForecast';

function Routes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/forecast/:city', element: <CityForecast /> },
  ]);
}

export default Routes;
