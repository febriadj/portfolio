import React from 'react';
import { Link } from 'react-router-dom';

function InfoGridBox({ style, databox }) {
  return (
    <div className={style.info}>
      <div className={style['info-wrap']}>
        <div className={style.header}>
          <div className={style.spelling}>
            <span className={style.strip}></span>
            <p className={style.paragraf}>{databox.spelling}</p>
          </div>
          <h2 className={style.title}>{databox.title}</h2>
          <p className={style.paragraf}>{databox.paragraf}</p>
        </div>
        <div className={style.footer}>
          <Link to={databox.link} className={style.link}>{databox.linkMessage}</Link>
        </div>
      </div>
    </div>
  );
}

export default InfoGridBox;
