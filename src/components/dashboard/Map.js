/*global google*/
import React, { Component } from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps";

class Map extends Component {
    state = {
        directions: null
    };

    componentDidMount() {
        const directionsService = new google.maps.DirectionsService();

        const origin = this.props.from;
        const destination = this.props.to;

        directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }

    render() {
        const Map = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={13}
            >
                <DirectionsRenderer directions={this.state.directions}/>
            </GoogleMap>
        ));

        return (
            <div>
                <Map
                    containerElement={<div style={{ height: `92vh`, width: `220vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Map;
