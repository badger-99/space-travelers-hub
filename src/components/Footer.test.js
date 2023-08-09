import { MemoryRouter } from 'react-router';
import Footer from './Footer';
import { render } from '@testing-library/react';

test('snapshot of nav bar', () => {
  const footer = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  expect(footer).toMatchSnapshot();
});
