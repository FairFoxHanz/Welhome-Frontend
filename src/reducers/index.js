import { combineReducers } from 'redux';
import PropertiesReducer from './reducer_properties';
import HelpersReducer from './reducer_helpers';
import SelectedPropertyReducer from './current_property'; 
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  selectedProperty: SelectedPropertyReducer,
  properties: PropertiesReducer,
  helpers: HelpersReducer,
  form: formReducer,  
});

export default rootReducer;
