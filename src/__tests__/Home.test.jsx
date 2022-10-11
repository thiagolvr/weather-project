import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home/Home';

const cities = [
  'Dallol',
  'Fairbanks',
  'London',
  'Recife',
  'Vancouver',
  'Yakutsk',
];

describe('Home page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });

  it('should render the Home page "weather" title', () => {
    const title = screen.getByText(/weather/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the Home page "select a city" subtitle', () => {
    const subtitle = screen.getByText(/select a city/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('should render the Home page city options buttons', () => {
    const citiesButton = screen.getAllByRole('button');
    expect(citiesButton).toHaveLength(cities.length);

    cities.forEach((city) => {
      const cityOptionButton = screen.getByText(city);
      expect(cityOptionButton).toBeInTheDocument();
    });
  });

  it('should direct link to the forecast of the correct city', () => {
    cities.forEach((city) => {
      const cityOptionButton = screen.getByText(city);
      userEvent.click(cityOptionButton);
      expect(document.location.pathname).toBe(`/forecast/${city}`);
    });
  });
});
