import * as PropTypes from 'prop-types';
import * as S from '../../pages/CityForecast/style';

function ForecastExtraInfo(props) {
  const {
    weather, forecast, sunrise, sunset,
  } = props;

  return (
    <S.ForecastMoreInfo weather={weather}>
      <div>
        <p>wind speed</p>
        <span data-testid="wind-speed">
          { forecast?.windSpeed }
          { ' ' }
          m/s
        </span>
      </div>
      <hr className="first" />
      <div>
        <p>sunrise</p>
        <span data-testid="sunrise">{ sunrise }</span>
      </div>
      <hr />
      <div>
        <p>sunset</p>
        <span data-testid="sunset">{ sunset }</span>
      </div>
      <hr />
      <div>
        <p>humidity</p>
        <span data-testid="humidity">
          { forecast?.humidity }
          %
        </span>
      </div>
    </S.ForecastMoreInfo>
  );
}

ForecastExtraInfo.propTypes = {
  weather: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  forecast: PropTypes.shape({
    dawn: PropTypes.shape({
      temperature: PropTypes.number,
      image: PropTypes.string,
      time: PropTypes.string,
    }).isRequired,
    morning: PropTypes.shape({
      temperature: PropTypes.number,
      image: PropTypes.string,
      time: PropTypes.string,
    }).isRequired,
    afternoon: PropTypes.shape({
      temperature: PropTypes.number,
      image: PropTypes.string,
      time: PropTypes.string,
    }).isRequired,
    night: PropTypes.shape({
      temperature: PropTypes.number,
      image: PropTypes.string,
      time: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastExtraInfo;
