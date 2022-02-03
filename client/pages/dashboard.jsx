import React, { useState } from 'react';
import style from '../styles/pages/dashboard.css';

import * as comp0 from '../components';
import * as comp1 from '../components/dashboard';
import * as cont from '../containers/dashboard';

function Dashboard() {
  const [page, setPage] = useState({
    main: true,
    profile: false,
    article: false,
    work: false,
    setting: false,
  });

  return (
    <div className={style.dashboard}>
      <comp0.loading />
      <div className={style['dashboard-wrap']}>
        <comp1.sidebar
          setPage={setPage}
        />
        { page.main && <cont.main /> }
        { page.profile && <cont.profile /> }
        { page.article && <cont.article /> }
        { page.work && <cont.work /> }
        { page.setting && <cont.setting /> }
      </div>
    </div>
  );
}

export default Dashboard;
