import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CityForecast from '../pages/CityForecast/CityForecast';

function Routes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/forecast/:city', element: <CityForecast /> },
  ]);
}

export default Routes;
