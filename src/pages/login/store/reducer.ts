export const initialState = {
  // 当前只有两种模式，登陆表单（login）和登陆成功（loginSucceed）
  step: 'login',
};

export const UPDATE_STEP = 'UPDATE_STEP';

export const loginReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STEP:
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
