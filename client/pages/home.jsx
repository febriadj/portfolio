import React, { useEffect, useState } from 'react';
import style from '../styles/pages/home.css';

import Navbar from '../containers/navbar';
import Banner from '../containers/home/banner';
import GridBox from '../containers/home/gridbox';
import Profile from '../containers/home/profile';
import Footer from '../containers/footer';

function Home() {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    setTitle('Home - @febriadj');
    document.title = title;
  }, [
    title,
  ]);

  return (
    <div className={style.home}>
      <Navbar />
      <Banner style={style} />
      <GridBox style={style} />
      <Profile style={style} />
      <Footer />
    </div>
  );
}

export default Home;
