import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/pages/article.css';

import * as comp0 from '../components';
import * as comp1 from '../components/article';
import * as comp2 from '../components/auth';

function Article() {
  const isDev = process.env.NODE_ENV === 'development';

  const { darkmode } = useSelector((state) => state);

  const [articles, setArticles] = useState([]);
  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  const [auth, setAuth] = useState({
    login: false,
    register: false,
  });

  const handleGetArticles = async () => {
    try {
      const url = isDev ? 'http://localhost:8080/api/articles' : '/api/articles';

      const request = await (await fetch(url)).json();
      setArticles(request.data);
    }
    catch (error0) {
      console.error(error0.message);
    }
  }

  useEffect(() => {
    handleGetArticles();
  }, []);

  useEffect(() => {
    document.title = '@febriadji - Articles';
  });

  return (
    < >
      <div className={`${style.article} ${darkmode && style.dark}`}>
        <comp0.loading />
        <comp0.navbar
          location="/articles"
          setMenuBarIsOpen={setMenuBarIsOpen}
          setAuth={setAuth}
        />
        <comp0.menubar
          location="/articles"
          menuBarIsOpen={menuBarIsOpen}
        />
        <comp2.login
          loginFormIsOpen={auth.login}
          setAuth={setAuth}
        />
        <comp2.register
          registerFormIsOpen={auth.register}
          setAuth={setAuth}
        />
        <div className={style['article-wrap']}>
          <comp1.latest articles={articles} />
        </div>
      </div>
      <comp0.footer />
    </>
  );
}

export default Article;
