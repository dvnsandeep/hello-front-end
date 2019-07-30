/*global google*/
import React, { Component } from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps";

class Map extends Component {
    state = {
        directions: null
    };

    
    distance(lat1, lon1, lat2, lon2) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.609344;
            return dist;
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
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
