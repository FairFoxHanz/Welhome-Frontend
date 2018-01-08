import { FETCH_ALL_PROPERTIES } from '../actions/'

export default function(state = {}, action){
    switch (action.type){
      case FETCH_ALL_PROPERTIES:
        return [...state, ...action.payload.data._embedded.property.reverse()];
      default:
        return state;
    }
}
