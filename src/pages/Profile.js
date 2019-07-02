import React from 'react';
import NavBar from "../components/NavBar";
import {Container, Row, Col } from 'react-grid';
import { Helmet } from 'react-helmet';
import { Card } from '@blueprintjs/core';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Profile extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      username: '',
      token: '',
      firstName: '',
      lastName: '',
      avatar: '',
      profileSet: false,
      dataSet: false,
      isLoggedIn: false
    };
  }
  componentDidMount(){
    const firstName = localStorage.getItem('firstname');
    const token = cookies.get('token');
    if(token)
    {
      if (firstName == null) {
        const username = cookies.get('username');
        this.setState({ token, username, isLoggedIn: true });
      } else { this.setState({ profileSet: true }); }
    }
  }

  componentDidUpdate() {
    if (!this.state.dataSet && this.state.profileSet) { this.setData(); }
  }

  setData() {
    const firstName = localStorage.getItem('firstname');
    const lastName = localStorage.getItem('lastname');
    const avatar = localStorage.getItem('avatar');
    const username = cookies.get('username');
    this.setState({ firstName, lastName, avatar, username, dataSet: true });
  }
    render	() {
        return (
            <React.Fragment>
                <NavBar/>
                <Helmet>
                  <title>Profile</title>
                </Helmet>
                <div className="page-container">
                    <Container>
                        <Card elevation ="2" style={{margin: 0}}>
                            <Row>
                                <Col sm={6} md={6}>
                                    <img src= {this.state.avatar}  style={{ width: '500px' }} alt="profile" />
                                </Col>
                                <Col sm={6} md={6}>
                                    <Row>
                                        <Col sm={2} md={2}/>
                                        <Col sm={10} md={10}>
                                            <h1>{this.state.firstName} {this.state.lastName}</h1>
                                            <h3>@{this.state.username}</h3> <br/> <br/> <br/>
                                            <button className="button" >Send Message!</button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}
export default Profile
