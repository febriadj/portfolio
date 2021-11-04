import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../styles/containers/navbar.css';

function Navbar() {
  const props = useSelector((state) => state);

  return (
    <div className={style.navbar}>
      <div className={style['navbar-wrap']}>
        <div
          className={style.logo}
          style={{ background: props.darkMode ? '#0b0b0c' : null }}
        >
          <box-icon type="reguler" name="meh-blank" color="#ffffffdd"></box-icon>
        </div>
        <div className={style.menu}>
          <Link
            to="/articles"
            className={style.link}
            style={{
              borderColor: props.darkMode ? '#ffffffdd' : null,
              color: props.darkMode ? '#ffffffdd' : null,
            }}
          >
            Articles
          </Link>
          <Link
            to="/works"
            className={style.link}
            style={{
              borderColor: props.darkMode ? '#ffffffdd' : null,
              color: props.darkMode ? '#ffffffdd' : null,
            }}
          >
            Works
          </Link>
          <Link
            to="/contact"
            className={style.link}
            style={{
              borderColor: props.darkMode ? '#ffffffdd' : null,
              color: props.darkMode ? '#ffffffdd' : null,
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const response = {
    darkMode: state.darkMode,
  }
  return response;
}

export default connect(mapStateToProps)(Navbar);
