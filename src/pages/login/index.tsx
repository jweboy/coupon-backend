/*
 * @Author: jweboy
 * @Date: 2021-06-12 10:44:53
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-12 11:05:19
 */
import React, { FC } from 'react';
import SwitchModule from './components/SwitchModule';
import styles from './index.less';

export interface LoginProps {
  title?: string;
}

const LoginLayout: FC<LoginProps> = props => {
  return (
    <div className={styles['stu-login']}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.content}>
        <div className={styles.card}>
          <SwitchModule />
        </div>
      </div>
    </div>
  );
};

LoginLayout.defaultProps = {
  title: '通用管理后台',
};

export default LoginLayout;
