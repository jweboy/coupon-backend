import React, { forwardRef, useContext, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { FormProps } from 'antd/lib/form';
import { history } from 'umi';
import localStorage from '@/utils/storage';
import { HOME_PAGE } from '@/constants';
import { encryption } from '@/utils/encrypt';
import { onValidatePhoneNumber } from '@/utils/validate';
import styles from './index.less';
import { LoginContext } from '../../store/context';
import { UPDATE_STEP } from '../../store/reducer';

const FormItem = Form.Item;
let timer: number = 0;

const LoginForm = forwardRef((props, ref) => {
  const { state, dispatch } = useContext(LoginContext);

  // 表单校验通过
  const onFinish: FormProps['onFinish'] = values => {
    const { phone, password } = values;
    const data = { phone, password: encryption(password) };
    console.log('表单值:', values, data);

    // 这里可以发起请求、提示操作和页面跳转
    message.success('登陆成功');
    dispatch({ type: UPDATE_STEP, payload: 'loginSucceed' });
    localStorage.set('loginInfo', { username: phone });

    timer = Number(
      setTimeout(() => {
        history.push(HOME_PAGE);
      }, 600),
    );
  };

  // 表单校验失败
  const onFinishFailed: FormProps['onFinishFailed'] = errorInfo => {
    console.log('失败原因:', errorInfo);
  };

  useEffect(() => {
    return () => {
      timer = 0;
      clearTimeout(timer);
    };
  }, []);

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className={styles['stu-login-form']}>
      <FormItem name="phone" rules={[{ validator: onValidatePhoneNumber }]}>
        <Input placeholder="请输入手机号" className={styles.input} allowClear />
      </FormItem>
      <FormItem name="password" rules={[{ required: true, message: '请输入登录密码' }]}>
        <Input.Password
          placeholder="请输入登录密码"
          className={styles.input}
          autoComplete="new-password"
          allowClear
        />
      </FormItem>
      <FormItem>
        <Button block size="large" htmlType="submit" className={styles['submit-btn']}>
          登录
        </Button>
      </FormItem>
    </Form>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
