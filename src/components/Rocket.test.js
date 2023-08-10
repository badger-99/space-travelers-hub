/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Rocket from './Rocket';

describe('testing conditional rendering of elements', () => {
  test('In reserved rocket "Reserved" badge & Cancel "Reservation" button show, "Reserve Rocket"button does not', () => {
    const id = '1';
    const name = 'Falcon';
    const description = 'It is a rocket';
    const image = 'https://url.here';
    const reserved = true;

    render(
      <Provider store={store}>
        <Rocket
          id={id}
          name={name}
          description={description}
          image={image}
          reserved={reserved}
        />
      </Provider>,
    );

    const reserveBtn = screen.queryByText('Reserve Rocket');
    const reservationBadge = screen.getByText('Reserved');
    const cancelBtn = screen.getByText('Cancel Reservation');

    expect(reserveBtn).toBeNull();
    expect(reservationBadge).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  test('in un-reserved rocket "Reserve Rocket" button shows, "Reserved" badge & Cancel "Reservation" button do not show', () => {
    const id = '1';
    const name = 'Falcon';
    const description = 'It is a rocket';
    const image = 'https://url.here';
    const reserved = false;

    render(
      <Provider store={store}>
        <Rocket
          id={id}
          name={name}
          description={description}
          image={image}
          reserved={reserved}
        />
      </Provider>,
    );

    const reserveBtn = screen.getByText('Reserve Rocket');
    const reservationBadge = screen.queryByText('Reserved');
    const cancelBtn = screen.queryByText('Cancel Reservation');

    expect(reserveBtn).toBeInTheDocument();
    expect(reservationBadge).toBeNull();
    expect(cancelBtn).toBeNull();
  });
});
