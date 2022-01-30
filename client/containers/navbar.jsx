import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../styles/containers/navbar.css';

function Navbar() {
  const { darkmode } = useSelector((state) => state);

  return (
    <div className={style.navbar}>
      <div className={style['navbar-wrap']}>
        <div className={`${style.logo} ${darkmode && style.dark}`}>
          <box-icon type="reguler" name="meh-blank" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
        </div>
        <div className={style.menu}>
          <Link to="/articles" className={`${style.link} ${darkmode && style.dark}`}>Articles</Link>
          <Link to="/works" className={`${style.link} ${darkmode && style.dark}`}>Works</Link>
          <Link to="/contact" className={`${style.link} ${darkmode && style.dark}`}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
