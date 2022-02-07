import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/pages/home.css';

import * as comp0 from '../components';
import * as comp1 from '../components/home';
import * as comp2 from '../components/auth';

function Home() {
  const { darkmode } = useSelector((state) => state);

  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  const [auth, setAuth] = useState({
    login: false,
    register: false,
  });

  useEffect(() => {
    document.title = '@febriadji - Home';
  });

  return (
    < >
      <div className={`${style.home} ${darkmode && style.dark}`}>
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
        <div className={style['home-wrap']}>
          <comp1.banner />
          <comp1.gridbox />
          <comp1.profile />
        </div>
      </div>
      <comp0.footer />
    </>
  );
}

export default Home;
