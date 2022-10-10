import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home/Home';

describe('Home', () => {
  it('should render the Home page "weather" title', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const title = screen.getByText(/weather/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the Home page "select a city" subtitle', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const subtitle = screen.getByText(/select a city/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('should render the Home page city options buttons', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const cities = [
      'Dallol',
      'Fairbanks',
      'London',
      'Recife',
      'Vancouver',
      'Yakutsk',
    ];

    const citiesButton = screen.getAllByRole('button');
    expect(citiesButton).toHaveLength(cities.length);

    cities.forEach((city) => {
      const cityOptionButton = screen.getByText(city);
      expect(cityOptionButton).toBeInTheDocument();
    });
  });

  it('should direct link to the forecast of the correct city', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const cities = [
      'Dallol',
      'Fairbanks',
      'London',
      'Recife',
      'Vancouver',
      'Yakutsk',
    ];

    cities.forEach((city) => {
      const cityOptionButton = screen.getByText(city);
      userEvent.click(cityOptionButton);
      expect(document.location.pathname).toBe(`/forecast/${city}`);
    });
  });
});
