import { combineReducers } from 'redux';

import user from "./userReducer";

const rootReducer = combineReducers({
  state: (state = {}) => state,
  user
});

export default rootReducer;