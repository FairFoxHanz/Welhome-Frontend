import _ from 'lodash';
import {
    FETCH_SELECTION_HELPERS
} from '../actions/action_helpers'
import parseHelper from '../helpers/helpers_parser';

export default function (state = parseHelper(), action) {
    switch (action.type) {
        case FETCH_SELECTION_HELPERS:
            return parseHelper(action.payload);
        default:
            return state;
    }
}