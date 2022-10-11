import forecastResume from './forecastResume';

function constants(forecast) {
  const SUNRISE = forecast?.sunrise?.replace(/^(?:00:)?0?/, '');
  const SUNSET = forecast?.sunset?.replace(/^(?:00:)?0?/, '');
  const CONDITION = forecastResume(forecast?.condition);
  const URL_BASE = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/';
  return {
    SUNRISE, SUNSET, CONDITION, URL_BASE,
  };
}

export default constants;
