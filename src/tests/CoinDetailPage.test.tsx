import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CoinDetailsPage from '../pages/CoinDetail';
import store from '../store/configureStore';

describe('Testing CoinsListTable component', () => {
  it('Renders CoinsListTable component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinDetailsPage />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
