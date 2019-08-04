/*global google*/
import React from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps";
import dataFetch from '../../utils/dataFetch';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

const query = `
mutation Travels($token: String!){
  Travels(token:$token){
    from
    to
    users
  }
}
`;

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            directions: null
        };
    }
    
    distance(lat1, lon1, lat2, lon2) {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            const radlat1 = Math.PI * lat1 / 180;
            const radlat2 = Math.PI * lat2 / 180;
            const theta = lon1 - lon2;
            const radtheta = Math.PI * theta / 180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.609344;
            return dist;
        }
    }


    getMarkers = async () => {
        const token = cookies.get('token');
        const variables = { token: token  };
        const response = await dataFetch({ query, variables });
        if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
            console.log(response);
            return response;
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
