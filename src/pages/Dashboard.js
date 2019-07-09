import React from 'react';
import NavBar from "../components/NavBar";
import Map from "../components/dashboard/Map";
import { withScriptjs } from "react-google-maps";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            search: false,
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(){
        const from = this.from.value;
        const to = this.to.value;
        this.setState({
            to,
            from,
            search: true
        })
    }

    render() {
      const MapLoader = withScriptjs(Map);
      return (
        <React.Fragment>
          <NavBar />
          <div className="page-container">
              {this.state.search ? <MapLoader
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaK8qoLfQ8WW7M4XGe60O1_LpVrBE6yyk"
                  loadingElement={<div style={{ height: `100%` }} />}
                  from={this.state.from}
                  to={this.state.to}
              />: null}
              <div className="row forms page-container">
                  <div className="col-sm-4">
                      <input placeholder="From"
                             ref={(from) => this.from = from}
                      />
                  </div>
                  <div className="col-sm-1"/>
                  <div className="col-sm-4">
                      <input placeholder="To"
                             ref={(to) => this.to = to}
                      />
                  </div>
                  <div className="col-md-2">
                      <button onClick={this.handleSearch}>Search</button>
                  </div>
              </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Dashboard;
