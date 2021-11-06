import React from 'react';
import { connect, useSelector } from 'react-redux';
import style from '../styles/containers/footer.css';

function Footer({ handleDarkMode }) {
  const props = useSelector((state) => state);

  return (
    <div className={style.footer}>
      <div className={style['footer-wrap']}>
        <div className={style.wrapper01}>
          <h2 className={style.title}>Let's works together</h2>
          <span className={style.contact}>
            <a
              href="mailto://iamfebriadji@gmail.com?subject=From%20...%20to%20Febriadji"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: props.darkMode ? '#ffffffdd' : null, borderColor: props.darkMode ? '#ffffffdd' : null }}
            >
              iamfebriadji@gmail.com
            </a>
            <a
              href="https://api.whatsapp.com/phone?no=6285156703982"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: props.darkMode ? '#ffffffdd' : null, borderColor: props.darkMode ? '#ffffffdd' : null }}
            >
              +62 851-5670-3982
            </a>
          </span>
          <p className={style.location}>Jakarta, Indonesia</p>
        </div>
        <div className={style.wrapper02}>
          <span className={style['media-social']}>
            <a
              href="https://www.linkedin.com/in/febri-adji/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: props.darkMode ? '#ffffffdd' : null, borderColor: props.darkMode ? '#ffffffdd' : null }}
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/febriadj"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: props.darkMode ? '#ffffffdd' : null, borderColor: props.darkMode ? '#ffffffdd' : null }}
            >
              Instagram
            </a>
            <a
              href="https://github.com/febriadj"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: props.darkMode ? '#ffffffdd' : null, borderColor: props.darkMode ? '#ffffffdd' : null }}
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
              props.darkMode && (<box-icon type="reguler" name="sun" color="#ffffffdd" animation="tada"></box-icon>)
            }
            {
              !props.darkMode && (<box-icon type="reguler" name="moon" animation="tada"></box-icon>)
            }
          </button>
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

export default connect(mapStateToProps)(Footer);
