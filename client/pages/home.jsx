import React, { useEffect, useState } from 'react';
import style from '../styles/pages/home.css';

import {
  platform as Platform,
  banner as Banner,
  profile as Profile,
  gridbox as GridBox,
} from '../containers/home/*';

function Home() {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    setTitle('@febriadj - Home');
    document.title = title;
  }, [
    title,
  ]);

  return (
    <div className={style.home}>
      <div className={style['home-wrap']}>
        <Banner style={style} />
        <GridBox style={style} />
        <Profile style={style} />
        <Platform style={style} />
      </div>
    </div>
  );
}

export default Home;
