import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/pages/notfound.css';

function NotFound() {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    setTitle('@febriadj - 404 Page Not Found');
    document.title = title;
  }, [
    title,
  ]);

  return (
    <div className={style.notfound}>
      <div className={style['notfound-wrap']}>
        <div className={style.banner}>
          <h1 className={style.title}>Oops. <span>404</span></h1>
          <h3 className={style.paragraf}>
            I can't find the page you're looking for. You don't need to be confused,
          </h3>
          <h3 className={style.paragraf}>
            please return to the main page by pressing the button below
          </h3>
          <Link to="/" className={style.link}>Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
