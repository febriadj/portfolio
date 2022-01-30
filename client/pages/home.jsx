import React, { useEffect, useState } from 'react';
import style from '../styles/pages/home.css';

import * as comp0 from '../components';
import * as comp1 from '../components/home';

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
      <comp0.loading />
      <comp0.navbar />
      <div className={style['home-wrap']}>
        <comp1.banner />
        <comp1.gridbox />
        <comp1.profile />
      </div>
    </div>
  );
}

export default Home;
