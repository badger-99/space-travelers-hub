import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

test('snapshot of nav bar', () => {
  const nav = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  expect(nav).toMatchSnapshot();
});
