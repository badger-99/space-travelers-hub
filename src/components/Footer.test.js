import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('snapshot of nav bar', () => {
  const footer = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  expect(footer).toMatchSnapshot();
});
