import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
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

  const props = useSelector((state) => state);
  const dispatch = useDispatch();

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
      dispatch({
        type: 'counter/darkMode',
        payload: {
          mode: true,
        },
      });
    } else {
      dispatch({
        type: 'counter/darkMode',
        payload: {
          mode: false,
        },
      });
    }
  }

  useEffect(() => {
    document.body.style = props.darkMode ? 'background: #151518; color: #ffffffdd' : null;
    handleCookie();

    setTimeout(() => {
      document.getElementsByClassName(style.cookie)[0].style = 'opacity: 1';
    }, 3000);
  }, [
    cookie, props.darkMode,
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
            darkMode={props.darkMode}
          />
        )
      }
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route><NotFound /></Route>
      </Switch>
      <Footer
        darkMode={props.darkMode}
        handleDarkMode={(event) => handleDarkMode(event)}
      />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  const response = {
    darkMode: state.darkMode,
  }
  return response;
}

const mapDispatchToProps = (dispatch) => {
  const response = {
    darkMode: () => dispatch({
      type: 'counter/darkMode',
    }),
  }
  return response;
}

export default connect(
  mapStateToProps, mapDispatchToProps,
)(App);
