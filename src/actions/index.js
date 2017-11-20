export const FETCH_PROPERTIES = 'fetch_properties';
export const CREATE_PROPERTY = 'create_property';

const LOGIN = 'Danny';
const PASSWORD = 'sukces1337';

export function fetchProperties(){
    //Call o propertiesy

    return {
      type: FETCH_PROPERTIES,
      payload: response
    }
}

export function createProperty(values, callback){
    // Zebranie danych do utworzenia property

    return {
      type: CREATE_PROPERTY,
      payload: request
    }
}