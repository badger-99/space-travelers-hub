/**
 * @jest-environment jsdom
*/
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Rockets from './Rockets';

describe('testing the rocket page rendering', () => {
  
  test('snapshot of loading message shown during API call', () => {
    const rocketArray = [];
    const isLoading = true;
    const error = null;
    
    const loading = render(
      <Provider store={store}>
        <Rockets
          rocketArray={rocketArray}
          isLoading={isLoading}
          error={error}
        />
      </Provider>,
    );

    expect(loading).toMatchSnapshot();
  });

  test('snapshot of error message rendered after failed API call', () => {
    const rocketArray = [];

    const isLoading = false;
    const error = 'There is an error';

    const showErrorMsg = render(
      <Provider store={store}>
        <Rockets
          rocketArray={rocketArray}
          isLoading={isLoading}
          error={error}
        />
      </Provider>,
    );

    expect(showErrorMsg).toMatchSnapshot();
  });

  test('snapshot of rockets display page after rockets have loaded', () => {
    const rocketArray = [
      {
        id: '1',
        name: 'Falcon',
        description: 'It is a rocket',
        image: 'https://url1.here',
        reserved: false,
      },
      {
        id: '2',
        name: 'Falcon-9',
        description: 'It is a bigger rocket',
        image: 'https://url2.here',
        reserved: false,
      },
      {
        id: '3',
        name: 'Falcon Heavy',
        description: 'It is an even bigger rocket',
        image: 'https://url3.here',
        reserved: true,
      },
    ];

    const isLoading = false;
    const error = null;

    const rocketView = render(
      <Provider store={store}>
        <Rockets
          rocketArray={rocketArray}
          isLoading={isLoading}
          error={error}
        />
      </Provider>,
    );

    expect(rocketView).toMatchSnapshot();
  });
});
