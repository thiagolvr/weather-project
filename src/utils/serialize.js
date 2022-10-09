const serialize = (obj) => ({
  name: obj?.location?.name,
  condition: obj?.current?.condition?.text,
  temperature: obj?.current?.temp_c,
  image: obj?.current?.condition?.icon.split('/')[6].replace('.png', '.svg'),
  time: obj?.current?.condition?.icon.split('/')[5],
  maxTemperature: obj?.forecast?.forecastday[0]?.day?.maxtemp_c,
  minTemperature: obj?.forecast?.forecastday[0]?.day?.mintemp_c,
  dawn: {
    temperature: obj?.forecast?.forecastday[0]?.hour?.[4].temp_c,
    image: obj?.forecast?.forecastday[0]?.hour?.[4].condition?.icon.split('/')[6].replace('.png', '.svg'),
    time: obj?.forecast?.forecastday[0]?.hour?.[4].condition?.icon.split('/')[5],
  },
  morning: {
    temperature: obj?.forecast?.forecastday[0]?.hour?.[10].temp_c,
    image: obj?.forecast?.forecastday[0]?.hour?.[10].condition?.icon.split('/')[6].replace('.png', '.svg'),
    time: obj?.forecast?.forecastday[0]?.hour?.[10].condition?.icon.split('/')[5],
  },
  afternoon: {
    temperature: obj?.forecast?.forecastday[0]?.hour?.[16].temp_c,
    image: obj?.forecast?.forecastday[0]?.hour?.[16].condition?.icon.split('/')[6].replace('.png', '.svg'),
    time: obj?.forecast?.forecastday[0]?.hour?.[16].condition?.icon.split('/')[5],
  },
  night: {
    temperature: obj?.forecast?.forecastday[0]?.hour?.[22].temp_c,
    image: obj?.forecast?.forecastday[0]?.hour?.[22].condition?.icon.split('/')[6].replace('.png', '.svg'),
    time: obj?.forecast?.forecastday[0]?.hour?.[22].condition?.icon.split('/')[5],
  },
  windSpeed: obj?.current?.wind_kph,
  humidity: obj?.current?.humidity,
  sunrise: obj?.forecast?.forecastday[0]?.astro?.sunrise,
  sunset: obj?.forecast?.forecastday[0]?.astro?.sunset,
});

export default serialize;
