import { combineReducers } from 'redux';
import weatherReducer from './slices/forecast';

const rootReducer = combineReducers({
	key: weatherReducer,
});

export default rootReducer;