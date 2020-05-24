import React, { FC } from 'react';
import { Switch, Route} from 'react-router-dom';
import { Home, Movies, Movie } from 'src/containers';


export const AppRouter: FC = (): JSX.Element => (
  <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/movies/:name' component={Movies} />
      <Route path='/movie/:id' component={Movie} />
  </Switch>
);