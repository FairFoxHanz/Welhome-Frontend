import axios from 'axios';

export const FETCH_PROPERTIES = 'fetch_properties';
export const CREATE_PROPERTY = 'create_property';

const LOGIN = 'Danny';
const PASSWORD = 'sukces1337';
const headers = {
    'Authorization': 'Basic ' + btoa(LOGIN + ":" + PASSWORD),
    'Credentials': 'same-origin'
}

const baseUrl = 'http://localhost:8080/';

export function createProperty(body) {

    const instance = axios.create({ headers });
    axios.post(`${baseUrl}property`, body)
    .then(response => console.log(response));

    return {
      type: CREATE_PROPERTY,
      payload: "request"
    }
}
