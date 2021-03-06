import React from 'react';
import NavBar from "../components/NavBar";
import Map from "../components/dashboard/Map";
import { withScriptjs } from "react-google-maps";
import dataFetch from '../utils/dataFetch';
import Cookies from 'universal-cookie';
import { GoogleComponent } from 'react-google-location';
import Geocode from "react-geocode"

const API_KEY = 'AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk';
Geocode.setApiKey("AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk");

const cookies = new Cookies();

const query = `
mutation createTravel($token: String!, $from: String! , $to: String!, $fromlatitude: String!, $fromlongitude: String! ) {
   createTravel(token: $token, from: $from , to: $to , fromlatitude: $fromlatitude, fromlongitude:$fromlongitude) {
    _id
    from
    to
    fromlatitude
    fromlongitude
  }
}
`;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            search: false,
            lat: null,
            lng: null
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
 
    handleSearch(){
        const from = this.from;
        Geocode.fromAddress(from).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({
                    fromlatitude: lat,
                    fromlongitude: lng,
                })
            },
            error => {
                console.error(error);
            }
        );
        const to = this.to;
        this.setState({
            to,
            from,
            search: true,

        });
        
    }

    handleSubmit(){
        this.travel();
    }

    travel = async () => {
        const token = cookies.get('token');
        const variables = { token: token ,from: this.state.from, to: this.state.to, fromlatitude: this.state.fromlatitude.toString(), fromlongitude: this.state.fromlongitude.toString() };
        const response = await dataFetch({ query, variables });
        if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
            console.log('worked');
        }
    };

    render() {
      const MapLoader = withScriptjs(Map);
      return (
        <React.Fragment>
          <NavBar />
          <div>
              {this.state.search ? <MapLoader
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk"
                  loadingElement={<div style={{ height: `100%` }} />}
                  from={this.state.from}
                  to={this.state.to}
              />: null}
              <div className="row forms">
                  <div className="col-sm-4 p-2">
                      <GoogleComponent
                          apiKey={API_KEY}
                          language={'en'}
                          country={'country:in'}
                          coordinates={true}
                          onChange={(e) => { this.setState({ place: e }); this.from = e.place }}
                      />
                  </div>
                  <div className="col-sm-4 p-2">
                      <GoogleComponent
                          apiKey={API_KEY}
                          language={'en'}
                          country={'country:in'}
                          coordinates={true}
                          onChange={(e) => { this.setState({ place: e });  this.to = e.place  }}
                      />
                  </div>
                  <div className="col-sm-2 p-2">
                      <button style={{marginLeft: 10}} onClick={this.handleSearch}>Search</button>
                  </div>
                  <div className="col-sm-2 p-2">
                      {this.state.search ? <button style={{marginLeft: 20}} onClick={this.handleSubmit}>Confirm</button> : null}
                  </div>
              </div>
          </div>

        </React.Fragment>
    );
  }
}

export default Dashboard;
