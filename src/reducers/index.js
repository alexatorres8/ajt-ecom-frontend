import { combineReducers } from 'redux';

import shop from "./shopReducer";

const rootReducer = combineReducers({
  state: (state = {}) => state,
  shop
});

export default rootReducer;