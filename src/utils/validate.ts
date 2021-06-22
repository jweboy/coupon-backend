import { checkIsEmptyOrNullOrUndefiend } from '.';

// 多类型的正则校验集合
export const pattern = {
  // password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
  password: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/,
  email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  phoneNumber: /^1[3-9]\d{9}$/,
};

// 校验手机号函数
export const isPhoneNumber = (str: string) => {
  return pattern.phoneNumber.test(str);
};

// 校验邮箱函数
export const isEmail = (str: string) => {
  return pattern.email.test(str);
};

// 校验手机号具体规则函数
export const onValidatePhoneNumber = (_: any, value: any) => {
  if (checkIsEmptyOrNullOrUndefiend(value)) {
    return Promise.reject(new Error('请输入手机号'));
  }
  if (!isPhoneNumber(value)) {
    return Promise.reject(new Error('请输入正确的手机号'));
  }

  return Promise.resolve();
};
