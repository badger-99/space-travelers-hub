import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ListItems from './ListItems';
import { store } from '../redux/store';

test('snapshot of single mission page', () => {
  const mission = render(
    <Provider store={store}>
      <ListItems />
    </Provider>
  );

  expect(mission).toMatchSnapshot();
});
