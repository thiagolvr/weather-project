import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import weatherAPI from '../../services/weatherAPI';
import serialize from '../../utils/serialize';

function CityForecast() {
  const { city } = useParams();
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    weatherAPI.getForecastByCity(city).then((data) => {
      setForecast(serialize(data));
    });
  }, []);

  return (
    <div>
      <h1>{forecast?.name}</h1>
      <p>{forecast?.condition}</p>
      <p>
        {forecast?.temperature}
        °C
      </p>
      <img src={forecast?.icon} alt="" />
      <p>{forecast?.maxTemperature}</p>
      <p>{forecast?.minTemperature}</p>
      <div>
        <p>Dawn</p>
        <img src={forecast?.dawn?.icon} alt="dawn icon" />
        <p>{forecast?.dawn?.temperature}</p>
      </div>
      <div>
        <p>Morning</p>
        <img src={forecast?.morning?.icon} alt="morning icon" />
        <p>{forecast?.morning?.temperature}</p>
      </div>
      <div>
        <p>Morning</p>
        <img src={forecast?.afternoon?.icon} alt="afternoon icon" />
        <p>{forecast?.afternoon?.temperature}</p>
      </div>
      <div>
        <p>Night</p>
        <img src={forecast?.night?.icon} alt="night icon" />
        <p>{forecast?.night?.temperature}</p>
      </div>
      <p>
        wind speed
        {forecast?.windSpeed}
      </p>
      <p>
        sunrise
        {forecast?.sunrise}
      </p>
      <p>
        sunset
        {forecast?.sunset}
      </p>
      <p>
        humidity
        {forecast?.humidity}
      </p>
    </div>
  );
}

export default CityForecast;
