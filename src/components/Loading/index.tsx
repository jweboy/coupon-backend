import { Spin } from 'antd';
import React from 'react';
import styles from './index.less';

const Loading = () => {
  return <Spin size="large" className={styles['vertical-horizontal-center']} tip=" 加载中..." />;
};

export default Loading;
