import * as taskContants from '../constants/task';

export const fetchListTask = (params = {}) => {
  return {
    type: taskContants.FETCH_TASK,
    payload: {
      params,
    },
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

export const addTask = (title, description) => {
  return {
    type: taskContants.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = data => {
  return {
    type: taskContants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTaskFailed = error => {
  return {
    type: taskContants.ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};
