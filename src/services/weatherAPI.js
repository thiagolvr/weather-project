import request, { statusCode, methods } from './api';

const API_KEY = process.env.REACT_APP_API_KEY;

const getForecastByCity = async (city) => {
  const result = await request(
    `/forecast.json?key=${API_KEY}&q=${city}`,
    statusCode.OK,
    methods.get,
    null,
  );
  return result.data;
};

const weatherAPI = {
  getForecastByCity,
};

export default weatherAPI;
