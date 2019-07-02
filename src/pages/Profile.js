import React from 'react';
import NavBar from "../components/NavBar";
import { Row, Col } from 'react-grid';
import { Helmet } from 'react-helmet';
import { Card } from '@blueprintjs/core';
import Cookies from 'universal-cookie';
import Cover from '../images/cover.jpeg';
import StarRatingComponent from 'react-star-rating-component';

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
      email: '',
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

  componentDidUpdate(){
    if (!this.state.dataSet && this.state.profileSet) { this.setData(); }
  }

  setData() {
    const firstName = localStorage.getItem('firstname');
    const lastName = localStorage.getItem('lastname');
    const avatar = localStorage.getItem('avatar');
    const username = cookies.get('username');
    const email = localStorage.getItem('email');
    this.setState({ firstName, lastName, avatar, username,email ,dataSet: true });
  }
    render	() {
        return (
            <React.Fragment>
                <NavBar/>
                <Helmet>
                  <title>Profile</title>
                </Helmet>
                <div className="page-container">
                    <Card elevation ="2" style={{margin: 0}}>
                        <img src={Cover} alt="coverimg" className="cover-img" />
                        <Row>
                            <Col xs={2} sm={2} md={2}/>
                            <Col xs={3} sm={3} md={3}>
                                <img src= {this.state.avatar}  className="profile-img" alt="profile" />
                            </Col>
                            <Col xs={6} sm={6} md={6} className="profile-text">
                                <h1>{this.state.firstName} {this.state.lastName}</h1>
                                <h3>@{this.state.username}</h3>
                            </Col>
                        </Row>
                    </Card>
                    <div className="sidebar">
                        <Row>
                            <Col sm={3} md={3}>
                                <h4 className="pb-4"><i className="fas fa-envelope-open-text pr-2"/>{this.state.email}</h4>
                                <button className="button">Send Message!</button>
                                <div style={{fontSize: 35, paddingTop: '1.5vh'}}>
                                    <StarRatingComponent
                                        name="app6"
                                        starColor="#ffb400"
                                        emptyStarColor="#ffb400"
                                        renderStarIcon={(index, value) => {
                                            return (
                                                <span>
                                                    <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
                                                </span>
                                            );
                                        }}
                                        renderStarIconHalf={() => {
                                            return (
                                                <span>
                                                    <span style={{position: 'absolute'}}><i className="far fa-star" /></span>
                                                    <span><i className="fas fa-star-half" /></span>
                                                </span>
                                            );
                                        }} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Profile
