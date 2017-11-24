export const FETCH_SELECTION_HELPERS = 'fetch_selection_helpers';

const LOGIN = 'Danny';
const PASSWORD = 'sukces1337';
const headers = new Headers({
    'Authorization': 'Basic ' + btoa(LOGIN + ":" + PASSWORD),
    'Credentials': 'same-origin'
})

const baseUrl = 'http://localhost:8080/builder/helpers/';

const urls = [`${baseUrl}offertType`, `${baseUrl}marketType`,
`${baseUrl}propertyType`, `${baseUrl}featureType`,
`${baseUrl}securityType`, `${baseUrl}materialType`,
`${baseUrl}heatingType`, `${baseUrl}buildingType`
]
export function fetchSelectionHelpers() {
    return {
        type: FETCH_SELECTION_HELPERS,
        payload: Promise.all(fetchHelpers())
    }
}

function fetchHelpers() {
    const helpers = urls.map(url => fetch(url, {headers}).then(response => response.json()
    .catch(error => console.log(error))));
    return helpers;
}