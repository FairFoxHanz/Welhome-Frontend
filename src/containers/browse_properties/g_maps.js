import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%'
  }

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
      <Map google={this.props.google} zoom={2} className="card">
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