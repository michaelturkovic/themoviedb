import React, { FC } from 'react';
import { Switch, Route} from 'react-router-dom';
import { Home, Movies } from 'src/containers';


export const AppRouter: FC = (): JSX.Element => (
  <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/movies/:name' component={Movies} />
  </Switch>
);