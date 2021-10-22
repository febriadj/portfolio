import React from 'react';
import { Link } from 'react-router-dom';

function Banner({ style }) {
  return (
    <div className={style.banner}>
      <div className={style['banner-wrap']}>
        <p className={style.period}>Since mid-2020 - {new Date().getFullYear()}</p>
        <h1 className={style.title}>
          <span>Hi, I'm Febriadji, </span>
          <Link to="/contact" className={style.link}>I'm a junior full stack web developer</Link>
          <span> based in Jakarta, Indonesia</span>
        </h1>
      </div>
    </div>
  );
}

export default Banner;
