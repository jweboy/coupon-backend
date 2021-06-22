import { Layout, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import menus from './config';
import './index.less';

const SystemSider = () => {
  const [openKeys, setOpenKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState('');

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    setOpenKeys(keys);
  };

  const onClick: MenuProps['onClick'] = evt => {
    setSelectedKeys(evt.key);
  };

  useEffect(() => {
    // 默认展开所有子菜单
    const list = menus.filter(menu => !!menu.children).map(menu => menu.path);

    // 默认选中菜单第一项
    const firstMenuItem = menus.filter((_, index) => index === 0).map(menu => menu.path)[0] || '';

    setSelectedKeys(firstMenuItem);
    setOpenKeys(list);
  }, []);

  return (
    <Layout.Sider className="stu-system-sider">
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={[selectedKeys]}
        onClick={onClick}
        onOpenChange={onOpenChange}
      >
        {menus.map(menu => {
          return menu.children ? (
            <Menu.SubMenu key={menu.path} title={menu.name} icon={menu.icon}>
              {menu.children.map(submenu => (
                <Menu.Item key={submenu.path}>
                  <Link to={submenu.path}>{submenu.name}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={menu.path} icon={menu.icon}>
              <Link to={menu.path}>{menu.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
};

export default SystemSider;
