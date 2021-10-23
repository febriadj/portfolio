import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/containers/navbar.css';

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <box-icon type="reguler" name="meh-blank" color="#ffffff"></box-icon>
      </div>
      <div className={style.menu}>
        <Link to="/articles" className={style.link}><h3>Articles</h3></Link>
        <Link to="/works" className={style.link}><h3>Works</h3></Link>
        <Link to="/contact" className={style.link}><h3>Contact</h3></Link>
      </div>
    </div>
  );
}

export default Navbar;
