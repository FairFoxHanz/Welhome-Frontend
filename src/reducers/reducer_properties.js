import { FETCH_ALL_PROPERTIES } from '../actions/'

export default function(state = {}, action){
    switch (action.type){
      case FETCH_ALL_PROPERTIES:
        if(!action.payload.data) return state;
        return [...state, ...action.payload.data._embedded.property];
      default:
        return state;
    }
}
