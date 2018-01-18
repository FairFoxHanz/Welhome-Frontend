import { FETCH_PROPERTY } from '../actions/index';

export default function(state = null, action){
      switch(action.type){
        case FETCH_PROPERTY:
          return action.payload.data;
      }
      return state;
    }
    