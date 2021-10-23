import React from 'react';

import museum from '../../assets/images/museum.jpg';
import statue from '../../assets/images/statue.jpg';
import InfoGridBox from '../../components/home/infoGridBox';

function GridBox({ style }) {
  return (
    <div className={style.gridbox}>
      <div className={`${style.box} ${style.works}`}>
        <InfoGridBox
          databox={{
            spelling: 'wərks',
            title: 'Works.',
            paragraf: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum dignissimos.',
            link: '/works',
            linkMessage: 'See My Current Works',
          }}
          style={style}
        />
        <div className={style.license}>
          <p className={`${style.paragraf} ${style['paragraf-01']}`}>Shvets Anna - Pexels</p>
        </div>
        <img src={museum} alt={museum} />
      </div>
      <div className={`${style.box} ${style.articles}`}>
        <InfoGridBox
          databox={{
            spelling: 'ärdək(ə)ls',
            title: 'Articles.',
            paragraf: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum dignissimos.',
            link: '/articles',
            linkMessage: 'See All Articles',
          }}
          style={style}
        />
        <div className={style.license}>
          <p className={`${style.paragraf} ${style['paragraf-01']}`}>Francesco Ungaro - Pexels</p>
        </div>
        <img src={statue} alt={statue} />
      </div>
    </div>
  );
}

export default GridBox;
