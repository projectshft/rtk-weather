import { combineReducers } from "redux";
import forecastReducer from "./slices/forecast";

const rootReducer = combineReducers({
  forecasts: forecastReducer,
});

export default rootReducer;
