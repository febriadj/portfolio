import React from 'react';
import { connect, useSelector } from 'react-redux';

import style from '../../styles/containers/home/banner.css'

function Banner() {
  const { darkmode } = useSelector((state) => state);
  // set current age
  const currentAge = () => new Date().getFullYear() - new Date('2002-02-26').getFullYear();

  return (
    <div className={`${style.banner} ${darkmode && style.dark}`}>
      <p className={style.period}>since mid-2020 - {new Date().getFullYear()}</p>
      <h1 className={style.title}>
        <span>Hi, I'm Febriadji, {currentAge()} y.o.</span>
        <span className={style.bright}>Junior fullstack web developer.</span>
        <span>Based in Jakarta, Indonesia</span>
      </h1>
      <button type="button" className={style['scroll-btn']}>
        <p className={style.paragraf}>Scroll to See More</p>
        <box-icon
          color={darkmode ? '#ffffffdd' : '#000000'}
          type="reguler"
          name="right-arrow-alt"
        >
        </box-icon>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const response = {
    darkMode: state.darkMode,
  }
  return response;
}

export default connect(mapStateToProps)(Banner);
