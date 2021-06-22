/*
 * @Author: jweboy
 * @Date: 2021-06-12 10:44:53
 * @LastEditors: jweboy
 * @LastEditTime: 2021-06-23 00:23:21
 */
// 常用的跳转页面
export const HOME_PAGE = '/example';
export const LOGIN_PAGE = '/login';

export const REQUEST_BASE_URL =
  'https://service.jweboy.com' ||
  // 'http://127.0.0.1:4000' ||
  process.env.API;

// 用于生成加密密码串的固定公钥
export const PUBLIC_KEY = '';

// 服务器通用错误码
export const SUCCESS_CODE = 0;
export const REQUEST_NOT_FOUND = 404;
export const REQUEST_SERVER_ERROR = 500;

// 登录过期
export const LOGIN_EXPIRED = 10101;
// 未登录
export const NOT_LOGGED_IN = 10103;
// token 失效
export const INVALID_TOKEN_CODE = 40201;
// 缺少 token
export const NO_TOKEN_CODE = 40203;
