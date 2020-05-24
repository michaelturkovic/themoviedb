import React, { FC } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'src/containers';
import { store } from './store';

const Root: FC = (): JSX.Element => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById('root');
render(<Root />, rootElement);
