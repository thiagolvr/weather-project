import { useEffect } from 'react';
import Routes from './routes/Routes';
import weatherAPI from './services/weatherAPI';

function App() {
  useEffect(() => {
    weatherAPI.getForecastByCity('London')
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <Routes />

  );
}

export default App;
