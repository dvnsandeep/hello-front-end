import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
    marginTop: '3vh'
};
export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [{latitude: 15.9129, longitude: 79.7400},
                {latitude: 17.6868, longitude: 83.2185},
                {latitude: 18.1124, longitude: 79.0193},
                {latitude: 15.3173, longitude: 75.7139}]
        }
    }

    displayMarkers = () => {
        return this.state.locations.map((location, index) => {
            return <Marker key={index} id={index} position={{
                lat: location.latitude,
                lng: location.longitude
            }}
           onClick={() => console.log("You clicked me!")} />
        })
    };
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 20.5937, lng: 78.9629}}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk'
})(MapContainer);
