const verifyConditions = (arr, condition) => arr
  .some((conditionVariant) => condition?.toLowerCase().includes(conditionVariant));

const RAIN_VARIANTS = [
  'rain',
  'cloudy',
  'overcast',
  'drizzle',
  'shower',
  'thunder',
  'mist',
];
const SNOW_VARIANTS = ['snow', 'fog', 'blizzard', 'sleet'];
const SUN_VARIANTS = ['sun', 'clear'];

const forecastResume = (condition) => {
  if (verifyConditions(RAIN_VARIANTS, condition)) {
    return 'rain';
  }
  if (verifyConditions(SNOW_VARIANTS, condition)) {
    return 'snow';
  }
  if (verifyConditions(SUN_VARIANTS, condition)) {
    return 'sun';
  }
  return 'default';
};

export default forecastResume;
