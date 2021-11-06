import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'boxicons';
import style from './styles/utils/app.css';

import {
  notfound as NotFound,
  home as Home,
  resume as Resume,
} from './pages/*';

import {
  loading as Loading,
  cookie as Cookie,
  navbar as Navbar,
  footer as Footer,
} from './containers/*';

function App() {
  const [isLoading, setIsLoading] = useState(true);
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

  const handleDarkMode = () => {
    if (props.darkMode) {
      dispatch({
        type: 'counter/darkMode',
        payload: {
          mode: false,
        },
      });
    } else {
      dispatch({
        type: 'counter/darkMode',
        payload: {
          mode: true,
        },
      });
    }
  }

  useEffect(() => {
    document.body.style = props.darkMode ? 'background: #1a1b1e; color: #ffffffdd; ' : null;
    handleCookie();
    setTimeout(() => setIsLoading(false), 3000);

    setTimeout(() => {
      document.getElementsByClassName(style.cookie)[0].style = 'opacity: 1';
    }, 8000);
  }, [
    cookie, props.darkMode,
  ]);

  return (
    <BrowserRouter>
      <Loading style={style} isLoading={isLoading} />
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
        <Route exact path="/resume"><Resume style={style} /></Route>
        <Route><NotFound /></Route>
      </Switch>
      <Footer
        darkMode={props.darkMode}
        handleDarkMode={handleDarkMode}
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
