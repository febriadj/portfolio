import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from '../styles/pages/article.css';

import * as comp0 from '../components';
import * as comp1 from '../components/article';
import * as comp2 from '../components/auth';

function Article() {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((state) => state);

  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  const [auth, setAuth] = useState({
    login: false,
    register: false,
  });

  const handleDarkMode = () => {
    dispatch({
      type: 'counter/darkmode',
      payload: !darkmode,
    });
  }

  useEffect(() => {
    document.title = '@febriadj - Articles';
  });

  return (
    < >
      <div className={`${style.article} ${darkmode && style.dark}`}>
        <comp0.loading />
        <comp0.navbar
          setMenuBarIsOpen={setMenuBarIsOpen}
          setAuth={setAuth}
        />
        <comp0.menubar
          location="/"
          menuBarIsOpen={menuBarIsOpen}
        />
        <comp2.login
          loginFormIsOpen={auth.login}
          setAuth={setAuth}
        />
        <comp2.register
          registerFormIsOpen={auth.register}
          setAuth={setAuth}
        />
        <div className={style['article-wrap']}>
          <comp1.latest />
        </div>
      </div>
      <comp0.footer
        darkmode={darkmode}
        handleDarkMode={handleDarkMode}
      />
    </>
  );
}

export default Article;
