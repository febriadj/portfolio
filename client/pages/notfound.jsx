import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import style from '../styles/pages/notfound.css';

function NotFound() {
  const [title, setTitle] = useState(document.title);
  const props = useSelector((state) => state);

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
          <p className={style.paragraf}>
            I can't find the page you're looking for. You don't need to be confused.
          </p>
          <p className={style.paragraf}>
            Please return to the main page by pressing the button below
          </p>
          <Link
            className={style.link}
            to="/"
            style={{
              borderColor: props.darkMode ? '#ffffffdd' : null,
              color: props.darkMode ? '#ffffffdd' : null,
            }}
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const response = {
    darkMode: state.darkMode,
  }
  return response;
}

export default connect(mapStateToProps)(NotFound);
