import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home/Home';
import { CITIES } from '../utils/constants';
import renderWithRouter from '../utils/renderWithRouter';

describe('Home page', () => {
  beforeEach(() => {
    renderWithRouter(<Home />, true);
  });

  it('should render the Home page "weather" title', () => {
    const title = screen.getByText(/weather/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the Home page "select a city" subtitle', () => {
    const subtitle = screen.getByText(/select a city/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('should render the word icon', () => {
    const subtitle = screen.getByAltText(/word icon for home/i);
    expect(subtitle).toHaveAttribute('src', 'word-icon.png');
  });

  it('should render the Home page city options buttons', () => {
    const citiesButton = screen.getAllByRole('button');
    expect(citiesButton).toHaveLength(CITIES.length);

    CITIES.forEach((city) => {
      const cityOptionButton = screen.getByText(city);
      expect(cityOptionButton).toBeInTheDocument();
    });
  });

  it('should direct link to the forecast of the correct city', () => {
    CITIES.forEach((city) => {
      const cityOptionButton = screen.getByText(city);
      userEvent.click(cityOptionButton);
      expect(document.location.pathname).toBe(`/forecast/${city}`);
    });
  });
});
