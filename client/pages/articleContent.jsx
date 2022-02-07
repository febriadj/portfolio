import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Interweave from 'interweave';
import { useSelector } from 'react-redux';
import style from '../styles/pages/articleContent.css';

import avatar from '../assets/images/avatar-mini.jpg';

import * as comp0 from '../components';
import * as comp2 from '../components/auth';

function ArticleContent() {
  const isDev = process.env.NODE_ENV === 'development';

  const params = useParams();
  const { darkmode } = useSelector((state) => state);

  const [article, setArticle] = useState({
    tags: [],
    thumbnail: {
      publicId: null,
      url: null,
      format: null,
    },
  });

  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  const [auth, setAuth] = useState({
    login: false,
    register: false,
  });

  const handleGetArticle = async () => {
    try {
      const url = isDev ? `http://localhost:8080/api/articles?url=${params.url}` : `/api/articles?url=${params.url}`;

      const request = await (await fetch(url)).json();
      setArticle(request.data);
      document.title = `@febriadj - ${request.data.title}`;
    }
    catch (error0) {
      console.error(error0.message);
    }
  }

  const handleDate = (args) => {
    const date = new Date(args).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    return date;
  }

  useEffect(() => {
    handleGetArticle();
  }, []);

  return (
    < >
      <div className={`${style.content} ${darkmode && style.dark}`}>
        <comp0.loading />
        <comp0.navbar
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
        <div className={style['content-wrap']}>
          <div className={style.header}>
            <div className={style.top}>
              <box-icon name="pin" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
              <span className={style.date}>{handleDate(article.createdAt)}</span>
            </div>
            <h1 className={style.title}>{article.title}</h1>
            <div className={style.tags}>
              {
                article.tags.map((tag) => (
                  <Link
                    to={`/articles?tag=${tag}`}
                    key={tag}
                    className={style.btn}
                  >
                    {tag}
                  </Link>
                ))
              }
            </div>
            <div className={style.bottom}>
              <div className={style.author}>
                <img src={avatar} alt={avatar} className={style.avatar} />
                <div className={style.info}>
                  <p className={style.username}>{`@${article.author}`}</p>
                  <p className={style.job}>Full-Stack Web Developer</p>
                </div>
              </div>
              <div className={style.contact}>
                <a
                  href="https://github.com/febriadj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.link}
                >
                  <box-icon type="logo" name="github" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
                </a>
                <a
                  href="https://codepen.io/febrithm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.link}
                >
                  <box-icon type="logo" name="codepen" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
                </a>
                <a
                  href="https://t.me/febriadj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.link}
                >
                  <box-icon type="logo" name="telegram" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
                </a>
              </div>
            </div>
          </div>
          { article.thumbnail.url && (
            <img
              src={article.thumbnail.url}
              alt={article.thumbnail.publicId}
              className={style.thumbnail}
            />
          ) }
          <div className={style.body}>
            <Interweave
              content={article.content}
            />
          </div>
          <div className={style.feedback}>
            <div className={style.left}>
              <h2 className={style.title}>Give feedback for @febriadji about this article</h2>
            </div>
            <form action="" className={style.form}>
              <input type="email" name="email" id="email" placeholder="Your Email" className={style.control} />
              <textarea name="message" className={style.control} placeholder="Enter your message..."></textarea>
              <button type="submit" className={style['submit-btn']}>Submit</button>
            </form>
          </div>
          <div className={style.footer}>
            <div className={style.tags}>
              {
                article.tags.map((tag) => (
                  <Link
                    to={`/articles?tag=${tag}`}
                    key={tag}
                    className={style.btn}
                  >
                    {tag}
                  </Link>
                ))
              }
            </div>
          </div>
          <div className={style['other-articles']}>
            <div className={style.field}>
              <span className={style.number}>01.</span>
              <div className={style.text}>
                <div className={style.info}>
                  <span className={style.author}>{`@${article.author} - `}</span>
                  <span className={style.date}>{handleDate(article.createdAt)}</span>
                </div>
                <h2 className={style.title}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi ab quaerat
                </h2>
              </div>
            </div>
            <div className={style.field}>
              <span className={style.number}>02.</span>
              <div className={style.text}>
                <div className={style.info}>
                  <span className={style.author}>{`@${article.author} - `}</span>
                  <span className={style.date}>{handleDate(article.createdAt)}</span>
                </div>
                <h2 className={style.title}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi ab quaerat
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <comp0.footer />
    </>
  );
}

export default ArticleContent;
