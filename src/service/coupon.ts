import { Coupon, ICoupon } from '@/typings/coupon';
import { get, post } from '@/utils/request';

/*
 * @Author: jweboy
 * @Date: 2021-06-12 23:08:34
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-23 00:07:41
 */
export const getCoupons = <T>(data: T) => {
  return get({ url: '/api/coupons', params: data });
};

export const postCoupon = <T>(data: T) => {
  return post({ url: '/api/coupon', data });
};

export const postCouponEdit = <T>(data: T) => {
  return post({ url: '/api/coupon/edit', data });
};

export const postCouponDelete = (data: Coupon) => {
  return post({ url: '/api/coupon/delete', data });
};
