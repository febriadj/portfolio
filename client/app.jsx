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
  const [darkMode, setDarkMode] = useState(false);

  const handleCookie = () => {
    const arr = document.cookie.split(' ');

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].search('client') !== -1) {
        setCookie(true);
      }
    }
  }

  const handleDarkMode = (event) => {
    if (event.target.value === 'true') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  useEffect(() => {
    document.body.style = darkMode ? 'background: #1a1b1e; color: #ffffffdd' : null;
    handleCookie();

    setTimeout(() => {
      document.getElementsByClassName(style.cookie)[0].style = 'opacity: 1';
    }, 3000);
  }, [
    cookie, darkMode,
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
            darkMode={darkMode}
          />
        )
      }
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route><NotFound /></Route>
      </Switch>
      <Footer
        darkMode={darkMode}
        handleDarkMode={(event) => handleDarkMode(event)}
      />
    </BrowserRouter>
  );
}

export default App;
