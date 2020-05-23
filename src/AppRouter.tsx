import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from 'src/containers';


export const AppRouter: FC = (): JSX.Element => (
  <Switch>
      <Route path='/' exact component={Home} />
  </Switch>
);