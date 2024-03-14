import { combineReducers } from 'redux';
import cityReducer from './slices/city';

const rootReducer = combineReducers({
  city: cityReducer,
});

export default rootReducer;