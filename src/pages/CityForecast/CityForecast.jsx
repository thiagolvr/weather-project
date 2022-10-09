import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import weatherAPI from '../../services/weatherAPI';
import serialize from '../../utils/serialize';
import * as S from './style';
import arrowUp from '../../assets/imgs/arrow-up.svg';
import arrowUp2 from '../../assets/imgs/arrow-up2.svg';
import Loading from '../../components/Loading/Loading';
import arrowBack from '../../assets/imgs/arrowBack.svg';

function CityForecast() {
  const { city } = useParams();
  const navigate = useNavigate();
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    weatherAPI.getForecastByCity(city).then((data) => {
      setForecast(serialize(data));
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  const verifyConditions = (arr, condition) => arr
    .some((item) => condition?.toLowerCase().includes(item));

  const forecastColor = (condition) => {
    if (
      verifyConditions(['rain', 'cloudy', 'overcast', 'drizzle', 'shower'], condition)
    ) {
      return 'rain';
    }
    if (verifyConditions(['snow'], condition)) {
      return 'snow';
    }
    if (verifyConditions(['sun', 'clear'], condition)) {
      return 'sun';
    }
    return 'default';
  };

  const sunrise = forecast?.sunrise.replace(/^(?:00:)?0?/, '');
  const sunset = forecast?.sunset.replace(/^(?:00:)?0?/, '');

  return (
    loading
      ? (
        <Loading />
      ) : (
        <S.ForecastContainer weather={forecastColor(forecast?.condition)}>
          <S.BackButton onClick={() => navigate('/')} weather={forecastColor(forecast?.condition)}>
            <img src={arrowBack} alt="Voltar" />
          </S.BackButton>
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
                    ˚
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
                    ˚
                  </p>
                </S.TemperatureInfo>
              </section>
            </S.TemperatureContainer>
            <S.MainIcon>
              <img
                className="main-icon"
                src={`https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.time}/${forecast?.image}`}
                alt=""
              />
            </S.MainIcon>
            <S.ForecastList weather={forecastColor(forecast?.condition)}>
              <div>
                <p>dawn</p>
                <img
                  className="main-icon"
                  src={`https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.dawn?.time}/${forecast?.dawn?.image}`}
                  alt=""
                />
                <div>
                  <span>{Math.round(forecast?.dawn?.temperature)}</span>
                  <span>°</span>
                  <span>C</span>
                </div>
              </div>
              <div>
                <p>morning</p>
                <img
                  className="main-icon"
                  src={`https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.morning?.time}/${forecast?.morning?.image}`}
                  alt=""
                />
                <div>
                  <span>{Math.round(forecast?.morning?.temperature)}</span>
                  <span>°</span>
                  <span>C</span>
                </div>
              </div>
              <div>
                <p>afternoon</p>
                <img
                  className="main-icon"
                  src={`https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.afternoon?.time}/${forecast?.afternoon?.image}`}
                  alt=""
                />
                <div>
                  <span>{Math.round(forecast?.afternoon?.temperature)}</span>
                  <span>°</span>
                  <span>C</span>
                </div>
              </div>
              <div>
                <p>night</p>
                <img
                  className="main-icon"
                  src={`https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/${forecastColor(forecast?.condition) === 'snow' ? 'black' : 'white'}/${forecast?.night?.time}/${forecast?.night?.image}`}
                  alt=""
                />
                <div>
                  <span>{Math.round(forecast?.night?.temperature)}</span>
                  <span>°C</span>
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
              <hr className="first" />
              <div>
                <p>sunrise</p>
                <span>{sunrise}</span>
              </div>
              <hr />
              <div>
                <p>sunset</p>
                <span>{sunset}</span>
              </div>
              <hr />
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
      )
  );
}

export default CityForecast;
