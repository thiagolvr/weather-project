// import * as PropTypes from 'prop-types';
import * as S from '../../pages/CityForecast/style';

function PeriodsDay({ weather, urlbase, forecast }) {
  return (
    <S.ForecastList weather={weather}>
      <div>
        <p>dawn</p>
        <img
          className="main-icon"
          src={`${urlbase}${weather === 'snow' ? 'black' : 'white'}/${
            forecast?.dawn?.time
          }/${forecast?.dawn?.image}`}
          alt="icon of dawn temperature"
        />
        <div>
          <span data-testid="dawn-temperature">{ Math.round(forecast?.dawn?.temperature) }</span>
          <span>°</span>
          <span>C</span>
        </div>
      </div>
      <div>
        <p>morning</p>
        <img
          className="main-icon"
          src={`${urlbase}${weather === 'snow' ? 'black' : 'white'}/${
            forecast?.morning?.time
          }/${forecast?.morning?.image}`}
          alt="icon of morning temperature"
        />
        <div>
          <span data-testid="morning-temperature">{ Math.round(forecast?.morning?.temperature) }</span>
          <span>°</span>
          <span>C</span>
        </div>
      </div>
      <div>
        <p>afternoon</p>
        <img
          className="main-icon"
          src={`${urlbase}${weather === 'snow' ? 'black' : 'white'}/${
            forecast?.afternoon?.time
          }/${forecast?.afternoon?.image}`}
          alt="icon of afternoon temperature"
        />
        <div>
          <span data-testid="afternoon-temperature">{ Math.round(forecast?.afternoon?.temperature) }</span>
          <span>°</span>
          <span>C</span>
        </div>
      </div>
      <div>
        <p>night</p>
        <img
          className="main-icon"
          src={`${urlbase}${weather === 'snow' ? 'black' : 'white'}/${
            forecast?.night?.time
          }/${forecast?.night?.image}`}
          alt="icon of night temperature"
        />
        <div>
          <span data-testid="night-temperature">{ Math.round(forecast?.night?.temperature) }</span>
          <span>°C</span>
        </div>
      </div>
    </S.ForecastList>
  );
}

// PeriodsDay.propTypes = {
//   weather: PropTypes.string,
//   urlbase: PropTypes.string,
//   forecast: PropTypes.any,
// };

export default PeriodsDay;
