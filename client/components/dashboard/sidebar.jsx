import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../../styles/components/dashboard/sidebar.css';

function Sidebar({ setPage }) {
  const { darkmode } = useSelector((state) => state);

  return (
    <div className={style.sidebar}>
      <div className={style['sidebar-wrap']}>
        <div className={style.nav}>
          <Link to="/" className={style.link}>
            <box-icon name="arrow-back" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.text}>Home</p>
          </Link>
        </div>
        <div className={style.menu}>
          <button
            type="button"
            className={style.link}
            onClick={() => {
              setPage((prev) => ({
                ...prev,
                main: true,
                profile: false,
                article: false,
                work: false,
                setting: false,
              }));
            }}
          >
            <box-icon name="home" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.text}>Dashboard</p>
          </button>
          <button
            type="button"
            className={style.link}
            onClick={() => {
              setPage((prev) => ({
                ...prev,
                main: false,
                profile: true,
                article: false,
                work: false,
                setting: false,
              }));
            }}
          >
            <box-icon name="user" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.text}>Profile</p>
          </button>
          <button
            type="button"
            className={style.link}
            onClick={() => {
              setPage((prev) => ({
                ...prev,
                main: false,
                profile: false,
                article: true,
                work: false,
                setting: false,
              }));
            }}
          >
            <box-icon name="book" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.text}>Articles</p>
          </button>
          <button
            type="button"
            className={style.link}
            onClick={() => {
              setPage((prev) => ({
                ...prev,
                main: false,
                profile: false,
                article: false,
                work: true,
                setting: false,
              }));
            }}
          >
            <box-icon name="briefcase" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.text}>Works</p>
          </button>
          <button
            type="button"
            className={style.link}
            onClick={() => {
              setPage((prev) => ({
                ...prev,
                main: false,
                profile: false,
                article: false,
                work: false,
                setting: true,
              }));
            }}
          >
            <box-icon name="cog" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <p className={style.text}>Photos</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
