import { CheckOutlined } from '@ant-design/icons';
import React, { memo } from 'react';
import styles from './index.less';

const LoginSucceed = memo(() => {
  return (
    <div className={styles['stu-login-succeed']}>
      <div className={styles.icon}>
        <CheckOutlined />
      </div>
      <h4 className={styles.title}>登录成功</h4>
      <p>即将自动跳转...</p>
    </div>
  );
});

LoginSucceed.displayName = 'LoginSucceed';

export default LoginSucceed;
