import React from 'react';
import Banner from '../containers/home/banner';
import style from '../styles/pages/home.css';

function Home() {
  return (
    <div className={style.home}>
      <div className={style['home-wrap']}>
        <Banner style={style} />
      </div>
    </div>
  );
}

export default Home;
