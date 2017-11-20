export const FETCH_MARKET_TYPES = 'fetch_market_types';
export const FETCH_OFFER_TYPES = 'fetch_offer_types';
export const FETCH_PROPERTY_TYPES = 'fetch_property_types';
export const FETCH_FEATURE_TYPES = 'fetch_feature_types';

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

export function fetchOfferTypes() {
    return {
        type: FETCH_OFFER_TYPES,
        payload: fetch(OFFER_HELPERS_URL, {
            headers
        }).then(response => response.json())
    }
}


export function fetchMarketTypes() {
    return {
        type: FETCH_MARKET_TYPES,
        payload: fetch(MARKET_HELPERS_URL, {
            headers
        }).then(response => response.json())
    }
}

export function fetchPropertyTypes() {
    return {
        type: FETCH_PROPERTY_TYPES,
        payload: fetch(PROPERTY_HELPERS_URL, {
            headers
        }).then(response => response.json())
    }
}

export function fetchFeatureTypes() {
    return {
        type: FETCH_FEATURE_TYPES,
        payload: fetch(FEATURE_HELPERS_URL, {
            headers
        }).then(response => response.json())
    }
}