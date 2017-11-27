export default function(values) {
    const property = {
        information: {
            offerType: values.offerType,
            marketType: values.marketType,
            propertyType: values.propertyType,
        },
        details: {
            price: values.price,
            rent: values.rent,
            buildingType: values.buildingType
        },
        features: {
            features: values.features
        },
        extraFeatures: {
            materialType: values.materialType,
            heatingType: values.heatingType,
            securityTypes: values.securityTypes,
        },
        location: {
            province: values.province,
            town: values.town,
            district: values.district,
            street: values.street,
            streetNumber: values.streetNumber,
            lat: 0,
            lng: 0
        },
        description: {
            description: values.description
        },
    }
    return property;
}