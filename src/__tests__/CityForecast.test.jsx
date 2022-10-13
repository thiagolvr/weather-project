import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import apiMockSun from '../__mocks__/apiMockSun';
import App from '../App';
import apiMockSnow from '../__mocks__/apiMockSnow';
import apiMockRain from '../__mocks__/apiMockRain';
import {
  MAIN_TEMPERATURE_BLACK_ICON_URL,
  BLACK_ICONS_URL, WHITE_ICONS_URL,
  PERIODS,
} from '../utils/constants';
import renderWithRouter from '../utils/renderWithRouter';

describe('CityForecast page', () => {
  describe('London example', () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(apiMockSun),
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should show city name correctly', async () => {
      renderWithRouter(<App />, false, 'London');

      const cityName = await screen.findByRole('heading', { level: 1, name: /london/i });
      expect(cityName).toBeInTheDocument();
    });

    it('should show currentWeatherText correctly', async () => {
      renderWithRouter(<App />, false, 'London');

      const currentWeather = await screen.findByText(/sunny/i);
      expect(currentWeather).toBeInTheDocument();
    });

    it('should show main, min, max temperature correctly', async () => {
      renderWithRouter(<App />, false, 'London');

      const TEST_IDS = ['main-temperature', 'min-temperature', 'max-temperature'];
      const TEXT_CONTENTS = ['15', '11˚', '17˚'];

      TEST_IDS.forEach(async (testId, index) => {
        const forecastExtraInfo = await screen.findByTestId(testId);
        expect(forecastExtraInfo).toHaveTextContent(TEXT_CONTENTS[index]);
      });
    });

    it('should show the temperature of the four periods of the day correctly', async () => {
      renderWithRouter(<App />, false, 'London');

      const TEXT_CONTENTS = ['13', '11', '17', '11'];

      TEXT_CONTENTS.forEach(async (testId, index) => {
        const forecastExtraInfo = await screen.findByTestId(`${PERIODS}-temperature`);
        expect(forecastExtraInfo).toHaveTextContent(TEXT_CONTENTS[index]);
      });
    });

    it('should show the forecast extra info correctly', async () => {
      renderWithRouter(<App />, false, 'London');

      const TEST_IDS = ['wind-speed', 'sunrise', 'sunset', 'humidity'];
      const TEXT_CONTENTS = ['9 m/s', '7:16 AM', '6:18 PM', '51%'];

      TEST_IDS.forEach(async (testId, index) => {
        const forecastExtraInfo = await screen.findByTestId(testId);
        expect(forecastExtraInfo).toHaveTextContent(TEXT_CONTENTS[index]);
      });
    });

    it('should show white icons for all temperature fields', async () => {
      renderWithRouter(<App />, false, 'London');

      PERIODS.forEach(async (period, index) => {
        const icon = await screen.findByAltText(`icon of ${period} temperature`);
        expect(icon).toHaveAttribute('src', WHITE_ICONS_URL[index]);
      });
    });

    it('should back button work correctly', async () => {
      renderWithRouter(<App />, false, 'London');

      const backButton = await screen.findByAltText(/arrow back icon/i);
      expect(backButton).toBeInTheDocument();

      userEvent.click(backButton);

      const titleHome = await screen.findByRole('heading', { level: 1, name: /weather/i });
      expect(titleHome).toBeInTheDocument();
    });

    it('should check if the sun version arrows icons renders correctly', async () => {
      renderWithRouter(<App />, false, 'London');

      const minTemperatureArrowIcon = await screen.findByAltText(/arrow down icon for min temperature/i);
      expect(minTemperatureArrowIcon).toHaveAttribute('src', 'arrowSun.svg');

      const maxTemperatureArrowIcon = await screen.findByAltText(/arrow up icon for max temperature/i);
      expect(maxTemperatureArrowIcon).toHaveAttribute('src', 'arrowSun.svg');
    });
  });

  describe('Fairbanks example', () => {
    it('should show black icons for all temperature fields', async () => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(apiMockSnow),
      });

      renderWithRouter(<App />, false, 'Fairbanks');

      const mainTemperatureIcon = await screen.findByAltText(/icon of main temperature/i);
      expect(mainTemperatureIcon).toHaveAttribute('src', MAIN_TEMPERATURE_BLACK_ICON_URL);

      PERIODS.slice(1).forEach(async (period, index) => {
        const icon = await screen.findByAltText(`icon of ${period} temperature`);
        expect(icon).toHaveAttribute('src', BLACK_ICONS_URL[index]);
      });
    });

    it('should check if the rain version arrows icons renders correctly', async () => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(apiMockRain),
      });

      renderWithRouter(<App />, false, 'Fairbanks');

      const minTemperatureArrowIcon = await screen.findByAltText(/arrow down icon for min temperature/i);
      expect(minTemperatureArrowIcon).toHaveAttribute('src', 'arrowRain.svg');

      const maxTemperatureArrowIcon = await screen.findByAltText(/arrow up icon for max temperature/i);
      expect(maxTemperatureArrowIcon).toHaveAttribute('src', 'arrowRain.svg');
    });

    it('should check if the snow version arrows icons renders correctly', async () => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(apiMockSnow),
      });

      renderWithRouter(<App />, false, 'Fairbanks');

      const minTemperatureArrowIcon = await screen.findByAltText(/arrow down icon for min temperature/i);
      expect(minTemperatureArrowIcon).toHaveAttribute('src', 'arrowSnow.svg');

      const maxTemperatureArrowIcon = await screen.findByAltText(/arrow up icon for max temperature/i);
      expect(maxTemperatureArrowIcon).toHaveAttribute('src', 'arrowSnow.svg');
    });
  });
});
