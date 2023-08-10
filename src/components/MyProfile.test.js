import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from './MyProfile';
import { store } from '../redux/store';

test('snapshot of nav bar', () => {
  const profile = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );

  expect(profile).toMatchSnapshot();
});
