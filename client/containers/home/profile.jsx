import React from 'react';

function Profile({ style }) {
  return (
    <div className={style.profile}>
      <div className={style.about}>
        <div className={style.header}>
          <h1 className={style.title}>About Me</h1>
          <p className={style.spelling}>əˈbout mē</p>
        </div>
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
  );
}

export default Profile;
