/*
 * @Author: jweboy
 * @Date: 2021-06-12 10:44:53
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-20 22:43:43
 */
import React from 'react';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';

const menus = [
  {
    path: '/coupon',
    name: '优惠券管理',
    icon: <UserOutlined />,
  },
  // {
  //   path: '/system',
  //   name: '系统管理',
  //   icon: <SettingOutlined />,
  //   children: [
  //     {
  //       path: '/role',
  //       name: '权限管理',
  //     },
  //     {
  //       path: '/assets',
  //       name: '资源管理',
  //     },
  //   ],
  // },
];

export default menus;
