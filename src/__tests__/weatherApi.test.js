import weatherAPI from '../services/weatherAPI';

describe('weatherApi', () => {
  it('should test if the api is covered in failure case', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('error'));

    const weatherApiMockError = await weatherAPI.getForecastByCity('London');

    expect(weatherApiMockError.message).toBe('error');
  });
});
