import React from 'react';
import { Link } from 'react-router-dom';

function Cookie({ style, handleCookie, darkMode }) {
  const handleSetCookie = () => {
    document.cookie = `client=${Date.now()}.${1000 - Math.random() * 9000}`;
    setTimeout(() => handleCookie(), 500);
  }

  return (
    <div className={style.cookie}>
      <div className={style['cookie-wrap']}>
        <div className={style.box} style={{ background: darkMode ? '#0b0b0c' : null }}>
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
