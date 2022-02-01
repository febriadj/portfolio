import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../styles/components/navbar.css';

function Navbar({ setMenuBarIsOpen, setAuth }) {
  const { darkmode, isLoggedIn } = useSelector((state) => state);
  const [hamBtn, setHamBtn] = useState(false);

  return (
    <div className={`${style.navbar} ${darkmode && style.dark}`}>
      <div className={style['navbar-wrap']}>
        <div className={`${style.logo} ${darkmode && style.dark}`}>
          <box-icon type="reguler" name="meh-blank" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
        </div>
        <div className={style.menu}>
          <Link to="/articles" className={`${style.link} ${darkmode && style.dark}`}>Articles</Link>
          <Link to="/works" className={`${style.link} ${darkmode && style.dark}`}>Works</Link>
          <Link to="/contact" className={`${style.link} ${darkmode && style.dark}`}>Contact</Link>
        </div>
        <div className={style.action}>
          {
            isLoggedIn ? (
              <Link
                to="/dashboard"
                className={`${style.btn} ${style['auth-btn']}`}
              >
                <box-icon name="user" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
              </Link>
            ) : (
              <button
                type="button"
                className={`${style.btn} ${style['auth-btn']}`}
                onClick={() => {
                  setAuth((prev) => ({
                    ...prev,
                    login: true,
                  }));
                }}
              >
                <box-icon name="user" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
              </button>
            )
          }
          <button type="button" className={`${style.btn} ${style['book-btn']}`}>
            <box-icon name="book-bookmark" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
          </button>
          <button
            type="button"
            className={`${style.btn} ${style['ham-btn']}`}
            onClick={() => {
              setHamBtn((prev) => !prev);
              setMenuBarIsOpen((prev) => !prev);
            }}
          >
            <span className={`${style.strip} ${style.strip1} ${hamBtn && style.active}`}></span>
            <span className={`${style.strip} ${style.strip2} ${hamBtn && style.active}`}></span>
            <span className={`${style.strip} ${style.strip3} ${hamBtn && style.active}`}></span>
            <span className={`${style.strip} ${style.strip4} ${hamBtn && style.active}`}></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
