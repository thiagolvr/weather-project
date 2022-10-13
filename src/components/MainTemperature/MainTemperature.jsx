import * as PropTypes from 'prop-types';
import * as S from '../../pages/CityForecast/style';
import arrowRain from '../../assets/icons/arrowRain.svg';
import arrowSnow from '../../assets/icons/arrowSnow.svg';
import arrowSun from '../../assets/icons/arrowSun.svg';

const setArrow = (condition) => ({
  rain: arrowRain,
  snow: arrowSnow,
  sun: arrowSun,
})[condition];

function MainTemperature({ condition, forecast }) {
  return (
    <S.TemperatureContainer>
      <span data-testid="main-temperature">{ Math.round(forecast?.temperature) }</span>
      <section>
        <div>°C</div>
        <S.TemperatureInfo>
          <p data-testid="max-temperature">
            <img src={setArrow(condition)} alt="arrow up icon for max temperature" />
            { Math.round(forecast?.maxTemperature) }
            ˚
          </p>
          <div />
          <p data-testid="min-temperature">
            <img
              className="reverse"
              src={setArrow(condition)}
              alt="arrow down icon for min temperature"
            />
            { Math.round(forecast?.minTemperature) }
            ˚
          </p>
        </S.TemperatureInfo>
      </section>
    </S.TemperatureContainer>
  );
}

MainTemperature.propTypes = {
  condition: PropTypes.string.isRequired,
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

export default MainTemperature;
