import verifyConditions from './verifyConditions';

const forecastResume = (condition) => {
  if (
    verifyConditions(
      ['rain', 'cloudy', 'overcast', 'drizzle', 'shower'],
      condition,
    )
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

export default forecastResume;
