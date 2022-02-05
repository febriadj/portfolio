import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import 'boxicons';
import './styles/utils/app.css';

import * as page from './pages';
import * as comp from './components';

function App() {
  const isDev = process.env.NODE_ENV === 'development';

  const dispatch = useDispatch();
  const { darkmode, isLoggedIn } = useSelector((state) => state);

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

    dispatch({
      type: 'counter/isLoggedIn',
      payload: !!token,
    });

    if (token) handleGetUser();
  }, [isLoggedIn]);

  return (
    <HashRouter>
      <comp.cookie />
      <Switch>
        {
          isLoggedIn && <Route exact path="/dashboard"><page.dashboard /></Route>
        }
        <Route exact path="/"><page.home /></Route>
        <Route exact path="/articles"><page.article /></Route>
        <Route exact path="/articles/:url"><page.articleContent /></Route>
        <Route><page.notfound /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
