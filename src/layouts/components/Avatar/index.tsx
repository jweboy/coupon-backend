import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Popover, Menu, message } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import React from 'react';
import './index.less';
import { Link } from 'umi'
import localStorage from '@/utils/storage';
import { LOGIN_PAGE } from '@/constants';

const SystemAvatar = () => {
  const auth = localStorage.get('auth');

  const onMenuClick: MenuProps['onClick'] = (data) => {
    const { key } = data;

    if (key === 'user') {
      message.success('😁 个人中心');
    }
    if (key === 'loginOut') {
      message.success('✌ 退出登录');
      localStorage.remove('auth');
    }
  };

  const Menus = () => {
    return (
      <Menu className="stu-system-popover-menu" onClick={onMenuClick}>
        <Menu.Item key="user">
          <Link to="/users">
            <UserOutlined />
            <span>个人中心</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="loginOut">
          <Link to={LOGIN_PAGE}>
            <LoginOutlined />
            <span>退出登录</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <Popover content={<Menus />} trigger="click" placement="bottom">
      <div>
        <Avatar size="small" />
        <span className="stu-system-username">{auth?.username}</span>
      </div>
    </Popover>
  );
};

export default SystemAvatar;
