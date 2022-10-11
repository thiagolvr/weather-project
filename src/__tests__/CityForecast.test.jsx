import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import apiMockSun from '../__mocks__/apiMockSun';
import App from '../App';
import apiMockSnow from '../__mocks__/apiMockSnow';
import apiMockRain from '../__mocks__/apiMockRain';

describe('CityForecast page', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(apiMockSun),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should show city name correctly', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/London' }]}>
        <App />
      </MemoryRouter>,
    );

    const cityName = await screen.findByRole('heading', { level: 1, name: /london/i });
    expect(cityName).toBeInTheDocument();
  });

  it('should show currentWeatherText correctly', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/London' }]}>
        <App />
      </MemoryRouter>,
    );

    const currentWeather = await screen.findByText(/sunny/i);
    expect(currentWeather).toBeInTheDocument();
  });

  it('should show main, min, max temperature correctly', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/Recife' }]}>
        <App />
      </MemoryRouter>,
    );

    const mainTemperature = await screen.findByTestId('main-temperature');
    expect(mainTemperature).toHaveTextContent('15');

    const minTemperature = await screen.findByTestId('min-temperature');
    expect(minTemperature).toHaveTextContent('11˚');

    const maxTemperature = await screen.findByTestId('max-temperature');
    expect(maxTemperature).toHaveTextContent('17˚');
  });

  it('should show the temperature of the four periods of the day correctly', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/London' }]}>
        <App />
      </MemoryRouter>,
    );

    const dawnTemperature = await screen.findByTestId('dawn-temperature');
    expect(dawnTemperature).toHaveTextContent('13');

    const morningTemperature = await screen.findByTestId('morning-temperature');
    expect(morningTemperature).toHaveTextContent('13');

    const afternoonTemperature = await screen.findByTestId('afternoon-temperature');
    expect(afternoonTemperature).toHaveTextContent('17');

    const nightTemperature = await screen.findByTestId('night-temperature');
    expect(nightTemperature).toHaveTextContent('11');
  });

  it('should show the forecast extra info correctly', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/London' }]}>
        <App />
      </MemoryRouter>,
    );

    const dawnTemperature = await screen.findByTestId('wind-speed');
    expect(dawnTemperature).toHaveTextContent('9 m/s');

    const morningTemperature = await screen.findByTestId('sunrise');
    expect(morningTemperature).toHaveTextContent('7:16 AM');

    const afternoonTemperature = await screen.findByTestId('sunset');
    expect(afternoonTemperature).toHaveTextContent('6:18 PM');

    const nightTemperature = await screen.findByTestId('humidity');
    expect(nightTemperature).toHaveTextContent('51%');
  });

  it('should show white icons for all temperature fields', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/London' }]}>
        <App />
      </MemoryRouter>,
    );
    const mainTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/day/113.svg';
    const mainTemperatureIcon = await screen.findByAltText(/icon of main temperature/i);
    expect(mainTemperatureIcon).toBeInTheDocument();
    expect(mainTemperatureIcon).toHaveAttribute('src', mainTemperatureIconUrl);

    const dawnTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/night/116.svg';
    const dawnTemperatureIcon = await screen.findByAltText(/icon of dawn temperature/i);
    expect(dawnTemperatureIcon).toBeInTheDocument();
    expect(dawnTemperatureIcon).toHaveAttribute('src', dawnTemperatureIconUrl);

    const morningTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/day/176.svg';
    const morningTemperatureIcon = await screen.findByAltText(/icon of morning temperature/i);
    expect(morningTemperatureIcon).toBeInTheDocument();
    expect(morningTemperatureIcon).toHaveAttribute('src', morningTemperatureIconUrl);

    const afternoonTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/day/113.svg';
    const afternoonTemperatureIcon = await screen.findByAltText(/icon of afternoon temperature/i);
    expect(afternoonTemperatureIcon).toBeInTheDocument();
    expect(afternoonTemperatureIcon).toHaveAttribute('src', afternoonTemperatureIconUrl);

    const nightTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/white/night/113.svg';
    const nightTemperatureIcon = await screen.findByAltText(/icon of night temperature/i);
    expect(nightTemperatureIcon).toBeInTheDocument();
    expect(nightTemperatureIcon).toHaveAttribute('src', nightTemperatureIconUrl);
  });

  it('should back button work correctly', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/London' }]}>
        <App />
      </MemoryRouter>,
    );

    const backButton = await screen.findByAltText(/arrow back icon/i);
    expect(backButton).toBeInTheDocument();

    userEvent.click(backButton);

    const titleHome = await screen.findByRole('heading', { level: 1, name: /weather/i });
    expect(titleHome).toBeInTheDocument();
  });

  it('should show black icons for all temperature fields', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(apiMockSnow),
    });

    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/London' }]}>
        <App />
      </MemoryRouter>,
    );

    const mainTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/night/326.svg';
    const mainTemperatureIcon = await screen.findByAltText(/icon of main temperature/i);
    expect(mainTemperatureIcon).toBeInTheDocument();
    expect(mainTemperatureIcon).toHaveAttribute('src', mainTemperatureIconUrl);

    const dawnTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/night/116.svg';
    const dawnTemperatureIcon = await screen.findByAltText(/icon of dawn temperature/i);
    expect(dawnTemperatureIcon).toBeInTheDocument();
    expect(dawnTemperatureIcon).toHaveAttribute('src', dawnTemperatureIconUrl);

    const morningTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/day/116.svg';
    const morningTemperatureIcon = await screen.findByAltText(/icon of morning temperature/i);
    expect(morningTemperatureIcon).toBeInTheDocument();
    expect(morningTemperatureIcon).toHaveAttribute('src', morningTemperatureIconUrl);

    const afternoonTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/day/371.svg';
    const afternoonTemperatureIcon = await screen.findByAltText(/icon of afternoon temperature/i);
    expect(afternoonTemperatureIcon).toBeInTheDocument();
    expect(afternoonTemperatureIcon).toHaveAttribute('src', afternoonTemperatureIconUrl);

    const nightTemperatureIconUrl = 'https://raw.githubusercontent.com/thiagolvr/weather-project/60d7bf8004be62a72752ee6fc43b16ede4f33022/src/assets/imgs/black/night/119.svg';
    const nightTemperatureIcon = await screen.findByAltText(/icon of night temperature/i);
    expect(nightTemperatureIcon).toBeInTheDocument();
    expect(nightTemperatureIcon).toHaveAttribute('src', nightTemperatureIconUrl);
  });

  it('should check if the rain version renders correctly', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(apiMockRain),
    });

    render(
      <MemoryRouter initialEntries={[{ pathname: '/forecast/Fairbanks' }]}>
        <App />
      </MemoryRouter>,
    );

    const currentWeather = await screen.findByText(/overcast/i);
    expect(currentWeather).toBeInTheDocument();
  });
});
