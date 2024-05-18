import { combineReducers } from 'redux';
import cityWeatherReducer from './slices/cities';

const rootReducer = combineReducers({
  cities: cityWeatherReducer,
})

export default rootReducer;