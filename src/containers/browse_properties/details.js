import React, { Component } from 'react';
import SimpleSlider from './slider';
import GoogleMap from './g_maps';
import { connect } from 'react-redux';
import {fetchProperty} from '../../actions/'
import propertyStub from '../../helpers/property_parser'

class Details extends Component {

    constructor(props){
        super(props);
        const pathName = window.location.pathname;
        
        const propertyRef = pathName.substring(pathName.indexOf('prop/') + 5);
        this.props.fetchProperty(propertyRef);
    }

    render() {
        const selectedProperty = this.props.selectedProperty || propertyStub({});
        console.log(selectedProperty);
        return (
            <div className="container mt-2">
                <div className="card w-75 mt-2 mb-2 mx-auto">
                    <h6>Cena: {selectedProperty.details.price}</h6>
                    <h6>Czynsz: {selectedProperty.details.rent}</h6>
                </div>
                <div className="card mt-2 mx-auto w-75">Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam,
                     quis nostrud
                     exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </div>
                <div className="card w-75 mt-2 mb-2 mx-auto">
                    <h6>Budynek: {selectedProperty.details.buildingType}</h6>
                    <h6>Materiał: {selectedProperty.extraFeatures.materialType}</h6>
                    <h6>Ogrzewanie: {selectedProperty.extraFeatures.heatingType}</h6>
                    <h6>Ochrony: </h6>
                </div>
                <div className="row mx-auto w-75">
                    <div className="card border-white mt-2 mx-auto col">
                        <div className="my-auto">
                            <h6>Wojewdzotwo: </h6>
                            <h6>Miasto: </h6>
                            <h6>Dzielnica: </h6>
                            <h6>Ulica: </h6>
                            <h6>Numer: </h6>
                        </div>
                    </div>
                    <div className="mapContainer col">
                        <GoogleMap className="mapContainer" />
                    </div>
                </div>
                <div className="row mt-2">
                    <SimpleSlider />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ selectedProperty }) {
    return { 
        selectedProperty
    }
}

export default connect(mapStateToProps, { fetchProperty })(Details);
// offerType, 
// marketType, 
// propertyType,

// description    
// price, 
// rent, 

// buildingType,
// features,
// materialType, 
// heatingType, 
// securityTypes,

// province, 
// town, 
// district, 
// street, 
// streetNumber,