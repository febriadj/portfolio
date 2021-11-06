import React from 'react';
import { connect, useSelector } from 'react-redux';
import resume from '../assets/images/resume.png';

function Resume({ style }) {
  const props = useSelector((state) => state);

  return (
    <div className={style.resume}>
      <div className={style['resume-wrap']}>
        <span className={style.block}></span>
        <img
          src={resume}
          alt={resume}
          className={style.image}
          style={{
            boxShadow: props.darkMode ? '0 0 8px #0d0e0f' : null,
          }}
        />
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

export default connect(mapStateToProps)(Resume);
