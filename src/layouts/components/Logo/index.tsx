import React, { memo } from 'react';
import styles from './index.less';

const SystemLogo = memo(() => {
  return (
    <div className={styles['stu-system-logo']}>
      <img
        src="https://sl-online-oss.shulidata.com/logo.png"
        alt="系统logo"
        className={styles.thumb}
      />
      <span className={styles.title}>通用系统模板</span>
    </div>
  );
});

SystemLogo.displayName = 'SystemLogo';

export default SystemLogo;
