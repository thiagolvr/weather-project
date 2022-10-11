import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import weatherAPI from '../../services/weatherAPI';
import serialize from '../../utils/serialize';
import * as S from './style';
import Loading from '../../components/Loading/Loading';
import arrowBack from '../../assets/icons/arrowBack.svg';
import PeriodsDay from '../../components/PeriodsDay/PeriodsDay';
import ForecastExtraInfo from '../../components/ForecastExtraInfo/ForecastExtraInfo';
import constants from '../../utils/constants';
import MainTemperature from '../../components/MainTemperature/MainTemperature';

function CityForecast() {
  const { city } = useParams();
  const navigate = useNavigate();
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    SUNRISE, SUNSET, CONDITION, URL_BASE,
  } = constants(forecast);

  useEffect(() => {
    setLoading(true);
    weatherAPI
      .getForecastByCity(city)
      .then((data) => {
        setForecast(serialize(data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <S.ForecastContainer weather={CONDITION}>
      <S.BackButton onClick={() => navigate('/')} weather={CONDITION}>
        <img src={arrowBack} alt="arrow back icon" />
      </S.BackButton>
      <S.ForecastContent>
        <S.Title>
          <h1>{forecast?.name}</h1>
          <p>{forecast?.condition}</p>
        </S.Title>
        <MainTemperature forecast={forecast} condition={CONDITION} />
        <S.MainIcon>
          <img
            className="main-icon"
            src={`${URL_BASE}${CONDITION === 'snow' ? 'black' : 'white'}/${
              forecast?.time
            }/${forecast?.image}`}
            alt="icon of main temperature"
          />
        </S.MainIcon>
        <PeriodsDay
          weather={CONDITION}
          urlbase={URL_BASE}
          forecast={forecast}
        />
        <ForecastExtraInfo
          weather={CONDITION}
          forecast={forecast}
          sunrise={SUNRISE}
          sunset={SUNSET}
        />
      </S.ForecastContent>
    </S.ForecastContainer>
  );
}

export default CityForecast;
