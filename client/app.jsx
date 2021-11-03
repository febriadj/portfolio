import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'boxicons';
import style from './styles/utils/app.css';

import Cookie from './containers/cookie';
import {
  notfound as NotFound,
  home as Home,
} from './pages/*';

import {
  navbar as Navbar,
  footer as Footer,
} from './containers/*';

function App() {
  const [cookie, setCookie] = useState(false);

  const handleCookie = () => {
    const arr = document.cookie.split(' ');

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].search('client') !== -1) {
        setCookie(true);
      }
    }
  }

  useEffect(() => {
    handleCookie();
  }, [
    cookie,
  ]);

  return (
    <BrowserRouter>
      <span className={style.pointer}></span>
      <Navbar />
      {
        !cookie && (
          <Cookie
            handleCookie={handleCookie}
            style={style}
          />
        )
      }
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route><NotFound /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
