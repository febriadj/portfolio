import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'boxicons';
import style from './styles/utils/app.css';

import * as page from './pages';
import * as comp from './components';

function App() {
  const { darkmode } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    if (darkmode) {
      dispatch({
        type: 'counter/darkmode',
        payload: false,
      });
    } else {
      dispatch({
        type: 'counter/darkmode',
        payload: true,
      });
    }
  }

  useEffect(() => {
    document.body.style = darkmode ? 'background: #1a1b1e; color: #ffffffdd; ' : null;
  }, [darkmode]);

  return (
    <BrowserRouter>
      <comp.cookie />
      <Switch>
        <Route exact path="/"><page.home /></Route>
        <Route exact path="/resume"><page.resume style={style} /></Route>
        <Route><page.notfound /></Route>
      </Switch>
      <comp.footer
        darkmode={darkmode}
        handleDarkMode={handleDarkMode}
      />
    </BrowserRouter>
  );
}

export default App;
