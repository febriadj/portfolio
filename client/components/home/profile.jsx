import React from 'react';
import { connect, useSelector } from 'react-redux';

import style from '../../styles/components/home/profile.css'

function Profile() {
  const { darkmode } = useSelector((state) => state);

  return (
    <div className={`${style.profile} ${darkmode && style.dark}`}>
      <div className={style.about}>
        <div className={style.header}>
          <span className={style.strip}></span>
          <div className={style.text}>
            <h1 className={style.title}>About Me</h1>
            <p className={style.spelling}>əˈbout mē</p>
          </div>
        </div>
        <div className={style.body}>
          <p className={style.paragraf}>
            Introduce me Febriadji, you can call me Febri. I am a student
            majoring in informatics engineering as well as a web developer with about 2 years
            of experience. During those 2 years,
            I've had several personal projects for you to consider.
            This profession is my passion, and I really like everything about programming.
          </p>
          <p className={style.paragraf}>
            I am someone who always has the ambition to continuously improve my programming skills,
            and contribute/work professionally with startups in Indonesia and abroad.
          </p>
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

export default connect(mapStateToProps)(Profile);
