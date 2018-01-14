export default (helpers = []) => {
    helpers = helpers.map(array => array.filter(helper => helper !== ""));
    return {
        offerTypes: helpers[0] || [],
        marketTypes: helpers[1] || [],
        propertyTypes: helpers[2] || [],
        featureTypes: helpers[3] || [],
        securityTypes: helpers[4] || [],
        materialTypes: helpers[5] || [],
        heatingTypes: helpers[6] || [],
        buildingTypes: helpers[7] || [],
    }
}