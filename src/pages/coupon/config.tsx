import React from 'react'
import { ICoupon } from "@/typings/coupon";
import { Image } from "antd";
import { ColumnProps } from "antd/lib/table";
import styles from './index.less';

/*
 * @Author: jweboy
 * @Date: 2021-06-12 11:09:42
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-23 00:02:59
 */
export const columns: ColumnProps<ICoupon>[] = [
  {
    dataIndex: 'id',
    title: 'id',
    width: 80,
    sorter: true
  },
  {
    dataIndex: 'image',
    title: '图片',
    width: 200,
    render(text) {
      return <Image src={text} />
    }
  },
  {
    dataIndex: 'jumpUrl',
    title: '跳转链接',
    width: 280,
    ellipsis: true,
  },
]
