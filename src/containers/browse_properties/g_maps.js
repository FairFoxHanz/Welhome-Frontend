import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props){
        super();
        this.state = {
            selectedPlace: {
                name: "X"
            }
        }
    }
    
render() {
    return (
      <Map google={this.props.google} zoom={5} className="card" disableDefaultUI center={{lat: 52, lng: 21 }} >
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
} 

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAwUOo4WwfYwsQMqwvNhuxe6SS3B_t0-bo")
})(MapContainer)