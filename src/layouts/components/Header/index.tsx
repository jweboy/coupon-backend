import { Avatar, Layout } from 'antd';
import React from 'react';
import SystemAvatar from '../Avatar';
import SystemLogo from '../Logo';
import './index.less';

const SystemHeader = () => {
  return (
    <Layout.Header className="stu-system-header">
      <SystemLogo />
      <SystemAvatar />
    </Layout.Header>
  );
};

export default SystemHeader;
