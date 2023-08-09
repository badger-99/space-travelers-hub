/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Rocket from "./Rocket";

describe('testing conditional rendering of elements', () => {
  
  test('In reserved rocket "Reserved" badge & Cancel "Reservation" button show, "Reserve Rocket"button does not', () => {
    const data = {
      id: '1',
      name: 'Falcon',
      description: 'It is a rocket',
      image: 'https://url.here',
      reserved: true,
    }
    render(
      <Provider store={store}>
        <Rocket {...data} />
      </Provider>
    );
    

    const reserveBtn = screen.queryByText('Reserve Rocket');
    const reservationBadge = screen.getByText('Reserved');
    const cancelBtn = screen.getByText('Cancel Reservation')
    
    expect(reserveBtn).toBeNull();
    expect(reservationBadge).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  })

  test('in un-reserved rocket "Reserve Rocket" button shows, "Reserved" badge & Cancel "Reservation" button do not show', () => {
    const data = {
      id: '1',
      name: 'Falcon',
      description: 'It is a rocket',
      image: 'https://url.here',
      reserved: false,
    }
    render(
      <Provider store={store}>
        <Rocket {...data} />
      </Provider>
    );
    
    const reserveBtn = screen.getByText('Reserve Rocket');
    const reservationBadge = screen.queryByText('Reserved');
    const cancelBtn = screen.queryByText('Cancel Reservation')
    
    expect(reserveBtn).toBeInTheDocument();
    expect(reservationBadge).toBeNull();
    expect(cancelBtn).toBeNull();
  })
})