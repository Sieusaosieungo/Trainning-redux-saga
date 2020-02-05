import * as type from '../constants/ui';

const initialState = {
  showLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }
    case type.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
