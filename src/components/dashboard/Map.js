/*global google*/
import React from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer, Marker} from "react-google-maps";
import dataFetch from '../../utils/dataFetch';
import Cookies from 'universal-cookie';
import Geocode from "react-geocode"

Geocode.setApiKey("AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk");


const cookies = new Cookies();
const query = `
mutation Travels($token: String!){
  Travels(token:$token){
    from
    to
    fromlatitude
    fromlongitude
    users
  }
}
`;

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            directions: null,
            markers: [],
            markersplaced: false
        };
    }

    getMarkers = async () => {
        const token = cookies.get('token');
        const variables = { token: token  };
        const response = await dataFetch({ query, variables });
        if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
            this.setState({
                markers: response.data.Travels,
                markersplaced: true
            })
        }
    };

    componentDidMount() {
        this.getMarkers();
        const directionsService = new google.maps.DirectionsService();

        const origin = this.props.from;
        const destination = this.props.to;

        directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
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
        const Map = withGoogleMap(props => {
            return <GoogleMap
                defaultZoom={13}
            >
                {props.markers.map((marker) => {
                    return (
                        <Marker
                            key={marker.fromlatitude + marker.longitude}
                            position={{ lat: parseFloat(marker.fromlatitude), lng: parseFloat(marker.fromlongitude) }}
                        />
                    )
                })}
                <DirectionsRenderer directions={this.state.directions}/>
            </GoogleMap>
        });

        return (
            <div>
                <Map
                    markers={this.state.markers}
                    containerElement={<div style={{ height: `92vh`, width: `220vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Map
