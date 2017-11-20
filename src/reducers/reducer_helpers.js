import _ from 'lodash';
import { 
    FETCH_MARKET_TYPES, 
    FETCH_OFFER_TYPES, 
    FETCH_PROPERTY_TYPES, 
    FETCH_FEATURE_TYPES 
} from '../actions/action_helpers'

export default function(state = {}, action){
    switch (action.type){
        case FETCH_OFFER_TYPES:
            console.log(action.payload)
            return action.payload;
        case FETCH_MARKET_TYPES:
            return action.payload;
        case FETCH_PROPERTY_TYPES:        
            console.log(action.payload)
            return action.payload;
        case FETCH_FEATURE_TYPES:
            console.log(action.payload)
            return action.payload;
      default:
        return state;
    }
}
