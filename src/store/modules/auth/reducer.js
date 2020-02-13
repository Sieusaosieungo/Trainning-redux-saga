import * as authConstant from '../../../constants/auth';

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
    default:
      return state;
  }
};

export default reducer;
