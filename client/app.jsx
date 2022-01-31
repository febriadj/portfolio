import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'boxicons';
import style from './styles/utils/app.css';

import * as page from './pages';
import * as comp from './components';

function App() {
  const isDev = process.env.NODE_ENV === 'development';

  const dispatch = useDispatch();
  const { darkmode, isLoggedIn } = useSelector((state) => state);

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

  const handleGetUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const url = isDev ? 'http://localhost:8080/api/users' : '/api/users';

      const request = await (await fetch(url, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })).json();

      if (!request.success) throw request;

      dispatch({
        type: 'counter/user',
        payload: request.data,
      });
    }
    catch (error0) {
      console.error(error0.message);
    }
  }

  useEffect(() => {
    document.body.style = darkmode ? 'background: #1a1b1e; color: #ffffffdd; ' : null;
  }, [darkmode]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch({
        type: 'counter/isLoggedIn',
        payload: true,
      });

      handleGetUser();
    } else {
      dispatch({
        type: 'counter/isLoggedIn',
        payload: false,
      });
    }
  }, [isLoggedIn]);

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
