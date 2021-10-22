import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/utils/app.css';

import Home from './pages/home';
import NotFound from './pages/notfound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route><NotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
