import { post } from '@/utils/request';

/*
 * @Author: jweboy
 * @Date: 2021-06-12 23:08:40
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-13 17:38:54
 */
export const postUploadFiles = (data: { file: Blob }) => {
  return post({
    url: '/qiniu/file/upload',
    data,
    contentType: 'file',
  });
};
