export const FETCH_SELECTION_HELPERS = 'fetch_selection_helpers';

const LOGIN = 'Danny';
const PASSWORD = 'sukces1337';
const headers = new Headers({
    'Authorization': 'Basic ' + btoa(LOGIN + ":" + PASSWORD),
    'Credentials': 'same-origin'
})

const OFFER_HELPERS_URL = 'http://localhost:8080/builder/helpers/offertType';
const MARKET_HELPERS_URL = 'http://localhost:8080/builder/helpers/marketType';
const PROPERTY_HELPERS_URL = 'http://localhost:8080/builder/helpers/propertyType';
const FEATURE_HELPERS_URL = 'http://localhost:8080/builder/helpers/featureType';

export function fetchSelectionHelpers() {
    const helpers = [
        getJsonResponse(OFFER_HELPERS_URL),
        getJsonResponse(MARKET_HELPERS_URL),
        getJsonResponse(PROPERTY_HELPERS_URL),
        getJsonResponse(FEATURE_HELPERS_URL)
    ]
    return {
        type: FETCH_SELECTION_HELPERS,
        payload: Promise.all(helpers)
    }
}

function getJsonResponse(requestUrl) {
 return fetch(requestUrl, {headers}).then(response => response.json());
}