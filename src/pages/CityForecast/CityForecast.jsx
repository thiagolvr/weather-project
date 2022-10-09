import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import weatherAPI from '../../services/weatherAPI';
import serialize from '../../utils/serialize';
import * as S from './style';
import arrowUp from '../../assets/imgs/arrow-up.svg';
import arrowUp2 from '../../assets/imgs/arrow-up2.svg';

function CityForecast() {
  const { city } = useParams();
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    weatherAPI.getForecastByCity(city).then((data) => {
      setForecast(serialize(data));
    });
  }, []);

  const verifyConditions = (arr, condition) => arr
    .some((item) => condition?.toLowerCase().includes(item));

  const forecastColor = (condition) => {
    if (
      verifyConditions(['rain', 'cloudy', 'overcast', 'drizzle'], condition)
    ) {
      return 'rain';
    }
    if (verifyConditions(['snow'], condition)) {
      return 'snow'; // unico escuro
    }
    if (verifyConditions(['sun', 'clear'], condition)) {
      return 'sun';
    }
    return 'default';
  };

  const sunrise = forecast?.sunrise.replace(/^(?:00:)?0?/, '');
  const sunset = forecast?.sunset.replace(/^(?:00:)?0?/, '');

  return (
    <S.ForecastContainer weather={forecastColor(forecast?.condition)}>
      <S.ForecastContent>
        <S.Title>
          <h1>{forecast?.name}</h1>
          <p>{forecast?.condition}</p>
        </S.Title>
        <S.TemperatureContainer>
          <span>{Math.round(forecast?.temperature)}</span>
          <section>
            <div>°C</div>
            <S.TemperatureInfo>
              <p>
                <img
                  src={
                    forecastColor(forecast?.condition) === 'sun'
                    || forecastColor(forecast?.condition) === 'rain'
                      ? arrowUp2
                      : arrowUp
                  }
                  alt="arrow-up"
                />
                {Math.round(forecast?.maxTemperature)}
                °
              </p>
              <p>
                <img
                  className="reverse"
                  src={
                    forecastColor(forecast?.condition) === 'sun'
                    || forecastColor(forecast?.condition) === 'rain'
                      ? arrowUp2
                      : arrowUp
                  }
                  alt="arrow-up"
                />
                {Math.round(forecast?.minTemperature)}
                °
              </p>
            </S.TemperatureInfo>
          </section>
        </S.TemperatureContainer>
        <S.MainIcon>
          <img
            className="main-icon"
            src={`https://raw.githubusercontent.com/thiagolvr/weather-project/dfd52b13f2b4d0b88a3ec166f2e7df653d1e722e/src/assets/imgs/${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.time}/${forecast?.image}`}
            alt=""
          />
        </S.MainIcon>
        <S.ForecastList weather={forecastColor(forecast?.condition)}>
          <div>
            <p>dawn</p>
            <img
              className="main-icon"
              src={`https://raw.githubusercontent.com/thiagolvr/weather-project/dfd52b13f2b4d0b88a3ec166f2e7df653d1e722e/src/assets/imgs/${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.dawn?.time}/${forecast?.dawn?.image}`}
              alt=""
            />
            <div>
              {Math.round(forecast?.dawn?.temperature)}
              °C
            </div>
          </div>
          <div>
            <p>morning</p>
            <img
              className="main-icon"
              src={`https://raw.githubusercontent.com/thiagolvr/weather-project/dfd52b13f2b4d0b88a3ec166f2e7df653d1e722e/src/assets/imgs/${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.morning?.time}/${forecast?.morning?.image}`}
              alt=""
            />
            <div>
              {Math.round(forecast?.morning?.temperature)}
              °C
            </div>
          </div>
          <div>
            <p>afternoon</p>
            <img
              className="main-icon"
              src={`https://raw.githubusercontent.com/thiagolvr/weather-project/dfd52b13f2b4d0b88a3ec166f2e7df653d1e722e/src/assets/imgs/
              ${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.afternoon?.time}/${forecast?.afternoon?.image}`}
              alt=""
            />
            <div>
              {Math.round(forecast?.afternoon?.temperature)}
              °C
            </div>
          </div>
          <div>
            <p>night</p>
            <img
              className="main-icon"
              src={`https://raw.githubusercontent.com/thiagolvr/weather-project/dfd52b13f2b4d0b88a3ec166f2e7df653d1e722e/src/assets/imgs/
              ${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.night?.time}/${forecast?.night?.image}`}
              alt=""
            />
            <div>
              {Math.round(forecast?.night?.temperature)}
              °C
            </div>
          </div>
        </S.ForecastList>
        <S.ForecastMoreInfo weather={forecastColor(forecast?.condition)}>
          <div>
            <p>wind speed</p>
            <span>
              {forecast?.windSpeed}
              {' '}
              m/s
            </span>
          </div>

          <div>
            <p>sunrise</p>
            <span>{sunrise}</span>
          </div>

          <div>
            <p>sunset</p>
            <span>{sunset}</span>
          </div>

          <div>
            <p>humidity</p>
            <span>
              {forecast?.humidity}
              %
            </span>
          </div>
        </S.ForecastMoreInfo>
      </S.ForecastContent>
    </S.ForecastContainer>
  );
}

export default CityForecast;