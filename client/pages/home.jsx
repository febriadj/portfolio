import React, { useEffect, useState } from 'react';
import style from '../styles/pages/home.css';

import * as cont0 from '../containers';
import * as cont1 from '../containers/home';

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
      <cont0.loading />
      <cont0.navbar />
      <div className={style['home-wrap']}>
        <cont1.banner />
        <cont1.gridbox />
        <cont1.profile />
      </div>
    </div>
  );
}

export default Home;
