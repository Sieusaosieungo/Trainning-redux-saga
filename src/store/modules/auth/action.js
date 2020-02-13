import * as authConstant from '../../../constants/auth';

export const signin = (email, password) => {
  return {
    type: authConstant.SIGNIN,
    payload: {
      email,
      password,
    },
  };
};

export const signinSuccess = data => {
  return {
    type: authConstant.SIGNIN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const signinFailed = error => {
  return {
    type: authConstant.SIGNIN_FAILED,
    payload: {
      error,
    },
  };
};
