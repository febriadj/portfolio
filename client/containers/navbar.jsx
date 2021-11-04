import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/containers/navbar.css';

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style['navbar-wrap']}>
        <div className={style.logo}>
          <box-icon type="reguler" name="meh-blank" color="#ffffff"></box-icon>
        </div>
        <div className={style.menu}>
          <Link to="/articles" className={style.link}>Articles</Link>
          <Link to="/works" className={style.link}>Works</Link>
          <Link to="/contact" className={style.link}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
