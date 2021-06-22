import { Layout } from 'antd';
import React, { FC } from 'react';
import LoginLayout from '@/pages/login';
import SystemHeader from './components/Header';
import SystemSider from './components/Sider';
import './index.less';

const SystemLayout: FC = props => {
  const { location } = props;

  if (location.pathname === '/login') {
    return <LoginLayout />;
  }

  return (
    <Layout className="stu-system-layout">
      <SystemHeader />
      <Layout>
        <SystemSider />
        <Layout className="stu-system-content">
          <Layout.Content>{props.children}</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SystemLayout;
