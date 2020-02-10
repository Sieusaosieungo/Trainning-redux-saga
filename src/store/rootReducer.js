import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import taskReducer from './modules/task/reducer';
import uiReducer from './modules/ui/reducer';
import modalReducer from './modules/modal/reducer';

const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
  form: formReducer,
});

export default rootReducer;
