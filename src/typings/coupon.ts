/*
 * @Author: jweboy
 * @Date: 2021-06-12 11:10:29
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-20 21:32:29
 */
export interface ICoupon {
  image: string;
  id: string;
  jumpUrl: string;
  appId: string;
}

export type Coupon = Partial<ICoupon>;
