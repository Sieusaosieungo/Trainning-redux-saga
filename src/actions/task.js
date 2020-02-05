import * as taskContants from '../constants/task';

export const fetchListTask = () => {
  return {
    type: taskContants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskContants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: taskContants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const filterTask = keyword => ({
  type: taskContants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = data => ({
  type: taskContants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});
