import * as type from '../constants/ui';

const initialState = {
  showLoading: false,
  showSidebar: false,
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
    case type.SHOW_SIDEBAR: {
      return {
        ...state,
        showSidebar: true,
      };
    }
    case type.HIDE_SIDEBAR: {
      return {
        ...state,
        showSidebar: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
