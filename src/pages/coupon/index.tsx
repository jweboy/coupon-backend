/*
 * @Author: jweboy
 * @Date: 2021-06-12 11:08:48
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-24 00:54:24
 */
import { getCoupons, postCouponDelete } from '@/service/coupon'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, message, Space, Table } from 'antd'
import styles from './index.less'
import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import useSWR from 'swr'
import CouponFormModal from './components/CouponFormModal'
import { columns } from './config'
import confirm from 'antd/lib/modal/confirm'
import { ICoupon } from '@/typings/coupon'
import { ColumnProps, TableProps } from 'antd/lib/table'
import { useCallback } from 'react'

const Coupon = () => {
  const [query, setQuery] = useState({
    order: 'desc'
    // pageNo: 1,
    // pageSize: 1
  })
  const [data, setData] = useState({});
  const modalRef = useRef(null);

  const onCreate = () => {
    // @ts-ignore
    modalRef.current?.onOpen('新建')
  }

  const onEdit = (record:ICoupon) => () => {
    // @ts-ignore
    modalRef.current?.onOpen('编辑', record)
  }

  const onDelete = (record: ICoupon) => () => {
    confirm({
      // icon:
      title: '确定吗，别手抖删错了喔😯',
      async onOk() {
        await postCouponDelete(record)
        message.success('删除成功')
        asyncGetList()
      }
    })
  }

  const asyncGetList = useCallback(() => {
    return getCoupons(query).then(({data}) => {
      setData(data);
    })
  }, [query])

  const getOrderField = (order: string = '') => {
    const [field] = order.split('end');
    return field
  }

  const onTableChange: TableProps<any>['onChange'] = (pagination, filters, sorter) => {
    const { order } = sorter;
    setQuery(prev => ({...prev, order: getOrderField(order) }))
  }

  useEffect(() => {
    asyncGetList();
  }, [query])

  const currColumns = useMemo<ColumnProps<ICoupon>[]>(() => {
    return [
      ...columns,
      {
        dataIndex: 'action',
        title: '操作',
        width: 100,
        render(_, record) {
          return (
            <Space size={16}>
              <a onClick={onEdit(record)}>编辑</a>
              <a onClick={onDelete(record)}>删除</a>
            </Space>
          )
        }
      }
    ]
  }, [columns])

  return (
    <Card >
      <Space direction="vertical" style={{width: '100%'}} size={16}>
        <Button type="primary" onClick={onCreate}>
          <PlusOutlined />
          新建
        </Button>
        <Table columns={currColumns} dataSource={data.items} rowKey="id" onChange={onTableChange} />
      </Space>
      <CouponFormModal onRefresh={asyncGetList} ref={modalRef}/>
    </Card>
  )
}

export default Coupon
