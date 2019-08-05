/*global google*/
import React from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps";
import dataFetch from '../../utils/dataFetch';
import Cookies from 'universal-cookie';
import { arrayExpression } from "@babel/types";
import Geocode from "react-geocode"

const API_KEY = 'AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk';
Geocode.setApiKey("AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk");


const cookies = new Cookies();
var rep=''
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
            directions: null,
            markers: null
        };
    }
    
    get_latlng(locat) {
        Geocode.fromAddress(locat).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                return { lat, lng }
            },
            error => {
                console.error(error);
            }
        );

    }
    getMarkers = async () => {
        const token = cookies.get('token');
        const variables = { token: token  };
        const response = await dataFetch({ query, variables });
        if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
            response.data.Travels.map((travel) => {
                console.log(travel.from);
                this.setState= {
                    markers:travel,
                }
            })
        }
    };
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
    get_lat(locat) {
        Geocode.fromAddress(locat).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                return lat
            },
            error => {
                console.error(error);
            }
        );

    }
    get_lng(locat) {
        Geocode.fromAddress(locat).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                return lng
            },
            error => {
                console.error(error);
            }
        );

    }


    adding_the_markers() {
        console.log(this.state.markers);
        var dist1,dist2;
        for (var i = 0; i < this.state.markers.length; i++) {

        dist1 = this.distance(this.get_lat(this.state.from), this.get_lng(this.state.from), this.get_lat(this.state.markers[i].from), this.get_lng(this.state.markers[1].from))
        console.log(dist1);
             }
    }
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
        //  const asdf = this.state.markers.map(Travels.map((from) => from));
        //  console.log(this.state.markers)
        // console.log(this.state.markers)
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

export default Map
