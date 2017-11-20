import { combineReducers } from 'redux';
import PropertiesReducer from './reducer_properties';
import HelpersReducer from './reducer_helpers';

const rootReducer = combineReducers({
  properties: PropertiesReducer,
  helpers: HelpersReducer
});

export default rootReducer;
