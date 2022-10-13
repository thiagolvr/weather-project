import forecastResume from './forecastResume';

export function constantsForForecast(forecast) {
  const SUNRISE = forecast?.sunrise?.replace(/^(?:00:)?0?/, '');
  const SUNSET = forecast?.sunset?.replace(/^(?:00:)?0?/, '');
  const CONDITION = forecastResume(forecast?.condition);
  const URL_BASE = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/';
  return {
    SUNRISE, SUNSET, CONDITION, URL_BASE,
  };
}

export const CITIES = [
  'Dallol',
  'Fairbanks',
  'London',
  'Recife',
  'Vancouver',
  'Yakutsk',
];

const MAIN_TEMPERATURE_WHITE_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/day/113.svg';
const DAWN_TEMPERATURE_WHITE_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/night/116.svg';
const MORNING_TEMPERATURE_WHITE_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/day/176.svg';
const AFTERNOON_TEMPERATURE_WHITE_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/day/113.svg';
const NIGHT_TEMPERATURE_WHITE_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/night/113.svg';

export const MAIN_TEMPERATURE_BLACK_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/night/326.svg';
const DAWN_TEMPERATURE_BLACK_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/night/116.svg';
const MORNING_TEMPERATURE_BLACK_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/day/116.svg';
const AFTERNOON_TEMPERATURE_BLACK_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/day/371.svg';
const NIGHT_TEMPERATURE_BLACK_ICON_URL = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/night/119.svg';

export const BLACK_ICONS_URL = [
  DAWN_TEMPERATURE_BLACK_ICON_URL,
  MORNING_TEMPERATURE_BLACK_ICON_URL,
  AFTERNOON_TEMPERATURE_BLACK_ICON_URL,
  NIGHT_TEMPERATURE_BLACK_ICON_URL,
];

export const WHITE_ICONS_URL = [
  MAIN_TEMPERATURE_WHITE_ICON_URL,
  DAWN_TEMPERATURE_WHITE_ICON_URL,
  MORNING_TEMPERATURE_WHITE_ICON_URL,
  AFTERNOON_TEMPERATURE_WHITE_ICON_URL,
  NIGHT_TEMPERATURE_WHITE_ICON_URL,
];

export const PERIODS = ['main', 'dawn', 'morning', 'afternoon', 'night'];
