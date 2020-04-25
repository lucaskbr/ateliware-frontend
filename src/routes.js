import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import RepositoriesLiked from './pages/RepositoriesLiked';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repositories/:language/:q" component={Repositories} />
      <Route path="/repositories/likes" component={RepositoriesLiked} />
    </Switch>
  );
}
