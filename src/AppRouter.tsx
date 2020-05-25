import React, { FC } from 'react';
import { Switch, Route} from 'react-router-dom';
import { Home, Movies, Movie, Search, NotFound } from 'src/containers';


export const AppRouter: FC = (): JSX.Element => (
  <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/movies/:name' component={Movies} />
      <Route path='/movie/:id' component={Movie} />
      <Route path='/search' component={Search} />
      <Route path='*' component={NotFound} />
  </Switch>
);