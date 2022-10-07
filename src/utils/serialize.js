const serialize = (obj) => ({
  name: obj?.location?.name,
  condition: obj?.current?.condition?.text,
  temperature: obj?.current?.temp_c,
  icon: obj?.current?.condition?.icon,
  maxTemperature: obj?.forecast?.forecastday[0]?.day?.maxtemp_c,
  minTemperature: obj?.forecast?.forecastday[0]?.day?.mintemp_c,
  dawn: {
    temperature: obj?.forecast?.forecastday[0]?.hour?.[4].temp_c,
    icon: obj?.forecast?.forecastday[0]?.hour?.[4].condition?.icon,
  },
  morning: {
    temperature: obj?.forecast?.forecastday[0]?.hour?.[10].temp_c,
    icon: obj?.forecast?.forecastday[0]?.hour?.[10].condition?.icon,
  },
  afternoon: {
    temperature: obj?.forecast?.forecastday[0]?.hour?.[16].temp_c,
    icon: obj?.forecast?.forecastday[0]?.hour?.[16].condition?.icon,
  },
  night: {
    temperature: obj?.forecast?.forecastday[0]?.hour?.[22].temp_c,
    icon: obj?.forecast?.forecastday[0]?.hour?.[22].condition?.icon,
  },
  windSpeed: obj?.current?.wind_kph,
  humidity: obj?.current?.humidity,
  sunrise: obj?.forecast?.forecastday[0]?.astro?.sunrise,
  sunset: obj?.forecast?.forecastday[0]?.astro?.sunset,
});

export default serialize;
