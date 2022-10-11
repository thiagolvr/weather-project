const API_KEY = process.env.REACT_APP_API_KEY;

const URL_BASE = 'https://api.weatherapi.com/v1';

const getForecastByCity = async (city) => {
  try {
    const response = await fetch(
      `${URL_BASE}/forecast.json?key=${API_KEY}&q=${city}`,
    );
    return response.json();
  } catch (error) {
    return error;
  }
};

const weatherAPI = {
  getForecastByCity,
};

export default weatherAPI;
