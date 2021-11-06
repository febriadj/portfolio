import React from 'react';
import { connect, useSelector } from 'react-redux';

function Loading({ style, isLoading }) {
  const props = useSelector((state) => state);

  return (
    <div
      className={style.loading}
      style={{
        background: props.darkMode ? '#1a1b1e' : null,
        zIndex: !isLoading ? '-9' : null,
        opacity: !isLoading ? '0' : null,
      }}
    >
      <div className={style['loading-wrap']}>
        <p>Loading...</p>
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

export default connect(mapStateToProps)(Loading);
