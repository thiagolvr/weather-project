// import * as PropTypes from 'prop-types';
import * as S from '../../pages/CityForecast/style';
import setArrow from '../../utils/setArrow';

function MainTemperature({ condition, forecast }) {
  return (
    <S.TemperatureContainer>
      <span>{ Math.round(forecast?.temperature) }</span>
      <section>
        <div>°C</div>
        <S.TemperatureInfo>
          <p>
            <img src={setArrow(condition)} alt="arrow-up" />
            { Math.round(forecast?.maxTemperature) }
            ˚
          </p>
          <div />
          <p>
            <img
              className="reverse"
              src={setArrow(condition)}
              alt="arrow-down"
            />
            { Math.round(forecast?.minTemperature) }
            ˚
          </p>
        </S.TemperatureInfo>
      </section>
    </S.TemperatureContainer>
  );
}

// MainTemperature.propTypes = {
//   forecast: PropTypes.any,
//   condition: PropTypes.string
// };

export default MainTemperature;
