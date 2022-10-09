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
          alt=""
        />
        <div>
          <span>{ Math.round(forecast?.dawn?.temperature) }</span>
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
          alt=""
        />
        <div>
          <span>{ Math.round(forecast?.morning?.temperature) }</span>
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
          alt=""
        />
        <div>
          <span>{ Math.round(forecast?.afternoon?.temperature) }</span>
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
          alt=""
        />
        <div>
          <span>{ Math.round(forecast?.night?.temperature) }</span>
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
