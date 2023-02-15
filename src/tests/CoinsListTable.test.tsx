import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CoinsListTable from '../components/CoinsListTable';
import store from '../store/configureStore';
import { coins } from './__mockData';

describe('Testing CoinsListTable component', () => {
  it('Renders CoinsListTable component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinsListTable coins={coins} />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
