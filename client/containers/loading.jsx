import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import style from '../styles/containers/loading.css';

function Loading() {
  const { darkmode } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [darkmode]);

  return (
    <div
      className={`
        ${style.loading}
        ${isLoading && style.active}
        ${darkmode && style.dark}
      `}
    >
      <div className={style['loading-wrap']}>
        <div className={style['sk-fading-circle']}>
          <div className={`${style['sk-circle1']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle2']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle3']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle4']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle5']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle6']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle7']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle8']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle9']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle10']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle11']} ${style['sk-circle']}`}></div>
          <div className={`${style['sk-circle12']} ${style['sk-circle']}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
