import React, { useState, useEffect } from 'react';
import style from '../styles/pages/storage';

import * as comp0 from '../components';
import * as comp2 from '../components/auth';

function Storage() {
  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  const [auth, setAuth] = useState({
    login: false,
    register: false,
  });

  useEffect(() => {
    document.title = '@febriadji - Storage';
  });

  return (
    <div className={style.storage}>
      <comp0.loading />
      <comp0.navbar
        location="/storage"
        setMenuBarIsOpen={setMenuBarIsOpen}
        setAuth={setAuth}
      />
      <comp0.menubar
        location="/storage"
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
      <div className={style['storage-wrap']}>
        <h1>Storage</h1>
      </div>
      <comp0.footer />
    </div>
  );
}

export default Storage;
