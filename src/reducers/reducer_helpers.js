import _ from 'lodash';
import { FETCH_SELECTION_HELPERS } from '../actions/action_helpers'

export default function(state = {
    offerTypes: [],
    marketTypes: [],
    propertyTypes: [],
    featureTypes: [],
    securityTypes: [],
    materialTypes: [],
    heatingTypes: [],
    buildingTypes: [],
}, action){
    switch (action.type){
        case FETCH_SELECTION_HELPERS:
            const helpers = {
                offerTypes: action.payload[0],
                marketTypes: action.payload[1],
                propertyTypes: action.payload[2],
                featureTypes: action.payload[3],
                securityTypes: action.payload[4],
                materialTypes: action.payload[5],
                heatingTypes: action.payload[6],
                buildingTypes: action.payload[7],
            }
            return helpers;
      default:
        return state;
    }
}
