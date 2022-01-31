import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from '../styles/components/menubar.css';

function MenuBar({ location, menuBarIsOpen }) {
  const { darkmode } = useSelector((state) => state);

  return (
    <div className={`
      ${style.menubar}
      ${menuBarIsOpen && style.active}
      ${darkmode && style.dark}
    `}
    >
      <div className={style['menubar-wrap']}>
        <div className={style.menu}>
          <Link to="/" className={`${style.link} ${location === '/' && style.active}`}>
            <box-icon name="home" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.paragraf}>Home</p>
            <span className={style.dot}></span>
          </Link>
          <Link to="/articles" className={`${style.link} ${location === '/articles' && style.active}`}>
            <box-icon name="book" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.paragraf}>Articles</p>
            <span className={style.dot}></span>
          </Link>
          <Link to="/works" className={`${style.link} ${location === '/works' && style.active}`}>
            <box-icon name="briefcase" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.paragraf}>Works</p>
            <span className={style.dot}></span>
          </Link>
          <Link to="/contact" className={`${style.link} ${location === '/contact' && style.active}`}>
            <box-icon name="id-card" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.paragraf}>Contact</p>
            <span className={style.dot}></span>
          </Link>
        </div>
        <div className={style.bookmark}>
          <h3 className={style.title}>Bookmarks</h3>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
