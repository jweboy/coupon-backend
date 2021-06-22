/*
 * @Author: jweboy
 * @Date: 2021-06-12 11:24:49
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-13 23:58:23
 */
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, UploadProps } from 'antd';
import styles from './index.less';
import React, { FC, useEffect, useState } from 'react'
import { postUploadFiles } from '@/service/common';
import { REQUEST_BASE_URL } from '@/constants';

export interface FileUploaderProps {
  title?: string
}

const FileUploader: FC<FileUploaderProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('')
  const data = { key: 'coupon-miniprogram' }
  const action = `${REQUEST_BASE_URL}/api/file/upload`;

  const getBase64Data = (img: Blob) => {
    const reader = new FileReader();
    return new Promise<string>((resolve) => {
      reader.addEventListener('load', () => resolve(reader.result as string));
      reader.readAsDataURL(img);
    })
  }

  const onBeforeUpload = async () => {}

  const onChange: UploadProps['onChange'] = async (info) => {
    const { file } = info;
    const { data } = file.response || {};

    if (file.status === 'uploading') {
      setLoading(true)
      return;
    }

    if (file.status === 'done') {
      const url = await getBase64Data(file.originFileObj!);
      setLoading(false)
      setImageUrl(url)
      // @ts-ignore
      props.onChange(data);
    }
  }

  console.log(props)

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className={styles.title}>{props.title}</div>
    </div>
  );

  useEffect(() => {
    if (props.fileList) {
      setImageUrl(props.fileList)
    }
  }, [])

  return (
    <Upload
      name="file"
      listType="picture-card"
      className={styles['file-uploader']}
      showUploadList={false}
      action={action}
      beforeUpload={onBeforeUpload}
      onChange={onChange}
      data={data}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  );
}

FileUploader.defaultProps = {
  title: '上传'
}

export default FileUploader
