import React, { Fragment, ReactElement, useMemo, useReducer } from 'react';
import styles from './index.less';
import { LoginProvider } from '../../store/context';
import { initialState, loginReducer } from '../../store/reducer';
import LoginForm from '../LoginForm';
import LoginSucceed from '../LoginSucceed';

const SwitchModule = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { step } = state;
  const renderLoginForm = () => (
    <Fragment>
      <div className={styles['main-title']}>登录</div>
      <LoginForm />
    </Fragment>
  );
  const renderComponent = useMemo(() => {
    const map: Record<string, ReactElement> = {
      login: renderLoginForm(),
      loginSucceed: <LoginSucceed />,
    };

    return map[step];
  }, [step]);

  return (
    <LoginProvider value={{ state, dispatch }}>
      <div className={styles['stu-login-module']}>{renderComponent}</div>
    </LoginProvider>
  );
};

export default SwitchModule;
