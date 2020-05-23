import React, { FC } from 'react';
import { render } from 'react-dom';
import { App } from 'src/containers';

const Root: FC = (): JSX.Element => <App />;

const rootElement = document.getElementById('root');
render(<Root />, rootElement);