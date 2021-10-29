import { combineReducers } from 'redux';

import shop from "./shopReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  state: (state = {}) => state,
  shop,
  user
});

export default rootReducer;