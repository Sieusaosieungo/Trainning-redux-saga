import * as authConstant from '../../../constants/auth';
import { toastError, toastSuccess } from '../../../helpers/toastHelper';

const initialState = {
  token: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.SIGNIN: {
      return {
        ...state,
      };
    }
    case authConstant.SIGNIN_SUCCESS: {
      const token = action.payload.data;
      toastSuccess('Đăng nhập thành công');
      return {
        ...state,
        token,
      };
    }
    case authConstant.SIGNIN_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
