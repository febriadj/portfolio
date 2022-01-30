import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from '../styles/containers/cookie.css';

function Cookie() {
  const { darkmode } = useSelector((state) => state);
  const [cookie, setCookie] = useState({
    active: false,
    isOpen: false,
  });

  const handleCookie = () => {
    const arr = document.cookie.split(' ');

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].search('client') !== -1) {
        setCookie((prev) => ({
          ...prev, active: true, isOpen: false,
        }));
      } else {
        setCookie((prev) => ({
          ...prev, active: false, isOpen: true,
        }));
      }
    }
  }

  const handleSetCookie = () => {
    document.cookie = `client=${Date.now()}.${1000 - Math.random() * 9000}`;
    handleCookie();
  }

  useEffect(() => {
    setTimeout(() => handleCookie(), 9000);
  }, [cookie]);

  return (
    <div className={`${style.cookie} ${cookie.isOpen && style.active}`}>
      <div className={style['cookie-wrap']}>
        <div className={`${style.box} ${darkmode && style.dark}`}>
          <h3 className={style.title}>This website use Cookies.</h3>
          <p className={style.paragraf}>
            <span>
              I use cookies to collect and analyse information
              on site performance and usage, to provide social media features and to enhance and
            </span>
            <span>customise content and advertisements. </span>
            <Link to="/cookie" className={style.link}>learn more</Link>
          </p>
          <div className={style.action}>
            <button className={style.btn} onClick={handleSetCookie}>Decline</button>
            <button className={style.btn} onClick={handleSetCookie}>Allow Access</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookie;
