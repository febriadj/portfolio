import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'boxicons';
import style from './styles/utils/app.css';

import Home from './pages/home';
import NotFound from './pages/notfound';

function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <span className={style.pointer}></span>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
