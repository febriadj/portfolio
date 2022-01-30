import React from 'react';
import { Link } from 'react-router-dom';

import museum from '../../assets/images/museum.jpg';
import statue from '../../assets/images/statue.jpg';

import style from '../../styles/components/home/gridbox.css'

function GridBox() {
  return (
    <div className={style.gridbox}>
      <div className={`${style.box} ${style.works}`}>
        <div className={style.info}>
          <div className={style['info-wrap']}>
            <div className={style.header}>
              <div className={style.spelling}>
                <span className={style.strip}></span>
                <p className={style.paragraf}>wərks</p>
              </div>
              <h2 className={style.title}>Works.</h2>
              <p className={style.paragraf}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus earum dignissimos.
              </p>
            </div>
            <div className={style.footer}>
              <Link to="/works" className={style.link}>See My Current Works</Link>
            </div>
          </div>
        </div>
        <div className={style.license}>
          <p className={`${style.paragraf} ${style['paragraf-01']}`}>Shvets Anna - Pexels</p>
        </div>
        <img src={museum} alt={museum} />
      </div>
      <div className={`${style.box} ${style.articles}`}>
        <div className={style.info}>
          <div className={style['info-wrap']}>
            <div className={style.header}>
              <div className={style.spelling}>
                <span className={style.strip}></span>
                <p className={style.paragraf}>ärdək(ə)ls</p>
              </div>
              <h2 className={style.title}>Articles.</h2>
              <p className={style.paragraf}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus earum dignissimos.
              </p>
            </div>
            <div className={style.footer}>
              <Link to="/articles" className={style.link}>See All Articles</Link>
            </div>
          </div>
        </div>
        <div className={style.license}>
          <p className={`${style.paragraf} ${style['paragraf-01']}`}>Francesco Ungaro - Pexels</p>
        </div>
        <img src={statue} alt={statue} />
      </div>
    </div>
  );
}

export default GridBox;
