import axios from 'axios';

export const FETCH_ALL_PROPERTIES = 'fetch_all_properties';
export const FETCH_PROPERTY = 'fetch_property';
export const CREATE_PROPERTY = 'create_property';

const LOGIN = 'Danny';
const PASSWORD = 'sukces1337';
const headers = {
    'Authorization': 'Basic ' + btoa(LOGIN + ":" + PASSWORD),
    'Credentials': 'same-origin'
}

const baseUrl = 'http://localhost:8080/';

export function createProperty(body) {

    const instance = axios.create({ headers: {'Authorization': 'Basic ' + btoa(LOGIN + ":" + PASSWORD),
    'Credentials': 'same-origin'} });
     const request = instance({method:'POST', url:`${baseUrl}property`,data: body});

    return {
      type: CREATE_PROPERTY,
      payload: request
    }
}

export function fetchAllProperties() {
        const instance = axios.create({ headers: {'Authorization': 'Basic ' + btoa(LOGIN + ":" + PASSWORD),
        'Credentials': 'same-origin'} });
         const request = instance({method:'GET', url:`${baseUrl}property`});
    
        return {
          type: FETCH_ALL_PROPERTIES,
          payload: request
        }
    }

    
export function fetchProperty(href) {
    const instance = axios.create({ headers: {'Authorization': 'Basic ' + btoa(LOGIN + ":" + PASSWORD),
    'Credentials': 'same-origin'} });
     const request = instance({method:'GET', url:`${baseUrl}property/${href}`});

    return {
      type: FETCH_PROPERTY,
      payload: request
    }
}