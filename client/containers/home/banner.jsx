import React from 'react';

function Banner({ style }) {
  // set current age
  const currentAge = () => new Date().getFullYear() - new Date('2002-02-26').getFullYear();

  return (
    <div className={style.banner}>
      <p className={style.period}>Since mid-2020 - {new Date().getFullYear()}</p>
      <h1 className={style.title}>
        <span>Hi, I'm Febriadji, {currentAge()} y.o.</span>
        <span className={style.bright}>Junior fullstack web developer.</span>
        <span>Based in Jakarta, Indonesia</span>
      </h1>
      <button type="button" className={style['scroll-btn']}>
        <p className={style.paragraf}>Scroll to See More</p>
        <box-icon type="reguler" name="right-arrow-alt"></box-icon>
      </button>
    </div>
  );
}

export default Banner;
