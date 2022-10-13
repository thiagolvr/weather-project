import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const renderWithRouter = (component, isTheHomPage, city) => (
  isTheHomPage
    ? render(<BrowserRouter>{component}</BrowserRouter>)
    : (
      render(
        <MemoryRouter initialEntries={[{ pathname: `/forecast/${city}` }]}>
          {component}
        </MemoryRouter>,
      )
    ));

export default renderWithRouter;
