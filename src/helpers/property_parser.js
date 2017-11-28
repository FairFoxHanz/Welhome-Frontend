export default ({ 
    offerType, marketType, propertyType,
    price, rent, buildingType,
    features,
    materialType, heatingType, securityTypes,
    province, town, district, street, streetNumber,
    description
 }) => ({
        'information': {
            offerType,
            marketType,
            propertyType,
        },
        'details': {
            price,
            rent,
            buildingType
        },
        'features': {
            features
        },
        'extraFeatures': {
            materialType,
            heatingType,
            securityTypes,
        },
        'location': {
            province,
            town,
            district,
            street,
            streetNumber,
            lat: 0,
            lng: 0
        },
        'description': {
            description
        },
    });