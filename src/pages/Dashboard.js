import React from 'react';
import MapContainer from "../components/map";
import NavBar from "../components/NavBar";

class Dashboard extends React.Component {
  render() {
    return (
        <React.Fragment>
          <NavBar /><br />
          <MapContainer/>
        </React.Fragment>
    );
  }
}

export default Dashboard;
