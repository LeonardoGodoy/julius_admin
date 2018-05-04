import { combineReducers } from 'redux';
import SalesReducer from './sales_reducer'

const rootReducer = combineReducers({
  sales: SalesReducer
});

export default rootReducer;
