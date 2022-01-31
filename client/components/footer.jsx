import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/components/footer.css';

function Footer({ handleDarkMode }) {
  const { darkmode } = useSelector((state) => state);

  return (
    <div className={style.footer}>
      <div className={style['footer-wrap']}>
        <div className={style.wrapper01}>
          <h2 className={style.title}>Let's works together</h2>
          <span className={style.contact}>
            <a
              href="mailto://iamfebriadji@gmail.com?subject=From%20...%20to%20Febriadji"
              target="_blank"
              className={`${style.link} ${darkmode && style.dark}`}
              rel="noopener noreferrer"
            >
              iamfebriadji@gmail.com
            </a>
            <a
              href="https://api.whatsapp.com/phone?no=6285156703982"
              target="_blank"
              className={`${style.link} ${darkmode && style.dark}`}
              rel="noopener noreferrer"
            >
              +62 851-5670-3982
            </a>
          </span>
          <p className={style.location}>Jakarta, Indonesia. 15153</p>
        </div>
        <div className={style.wrapper02}>
          <span className={style['media-social']}>
            <a
              href="https://www.linkedin.com/in/febri-adji/"
              target="_blank"
              className={`${style.link} ${darkmode && style.dark}`}
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://codepen.io/febrithm"
              target="_blank"
              className={`${style.link} ${darkmode && style.dark}`}
              rel="noopener noreferrer"
            >
              Codepen
            </a>
            <a
              href="https://github.com/febriadj"
              target="_blank"
              className={`${style.link} ${darkmode && style.dark}`}
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
        </div>
        <div className={style.wrapper03}>
          <p className={style.copyright}>
            &copy; {new Date().getFullYear()} febriadji.
          </p>
          <button
            className={style['theme-btn']}
            onClick={handleDarkMode}
          >
            {
              darkmode && (<box-icon type="reguler" name="sun" color="#ffffffdd"></box-icon>)
            }
            {
              !darkmode && (<box-icon type="reguler" name="moon"></box-icon>)
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
