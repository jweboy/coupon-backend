/*
 * @Author: jweboy
 * @Date: 2021-06-12 11:18:14
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-20 22:09:39
 */
import FileUploader from '@/components/FileUploader';
import { postCoupon, postCouponEdit } from '@/service/coupon';
import { Coupon, ICoupon } from '@/typings/coupon';
import { get } from '@/utils/request';
import { Modal, Form, Upload, message, Input } from 'antd'
import React, { FC, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

const CouponFormModal: FC<{ onRefresh: () => void }> = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const titleRef = useRef('')
  const [form] = Form.useForm();

  const onClose = () => {
    setVisible( false)
  }

  const onOpen = (title: string = '', data) => {
    titleRef.current = title;
    setData(data || {})
    setVisible(true)
  }

  const onOk = () => {
    form.submit()
  }

  const onFinish = async (values: { image: { url: string } }) => {
    const { image, ...restProps } = values;

    console.log(values)

    if (titleRef.current === '新建') {
      await postCoupon<Coupon>({
        ...restProps,
        image: image.url
      });
    }

    if (titleRef.current === '编辑') {
      await postCouponEdit<Coupon>({
        ...restProps,
        id: data.id,
        image: image.url || image
      });
    }
    message.success('保存成功')
    setVisible( false)
    props.onRefresh();
  }

  useImperativeHandle(ref, () => ({ onClose, onOpen }))

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data)
    }
  }, [visible])

  return (
    <Modal visible={visible} title={`${titleRef.current}优惠券`} onOk={ onOk} onCancel={onClose} destroyOnClose>
      <Form form={form} onFinish={onFinish} preserve={false} labelCol={{span: 4}} wrapperCol={{ span: 16 }}>
        <Form.Item name="appId" label="appId" rules={[{ required: true, message: '请输入appId'}]}>
          <Input allowClear placeholder="请输入appId" />
        </Form.Item>
        <Form.Item name="image" label="图片地址" rules={[{ required: true, message: '请选择图片地址'}]} valuePropName="fileList">
          <FileUploader />
        </Form.Item>
        <Form.Item name="jumpUrl" label="跳转链接" rules={[{ required: true, message: '请输入跳转链接'}]}>
          <Input.TextArea rows={4} placeholder="请输入跳转链接" />
        </Form.Item>

      </Form>
    </Modal>
  )
})

export default CouponFormModal
