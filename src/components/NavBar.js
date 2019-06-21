import React from "react";
import { Menu , Image } from "semantic-ui-react";
import Logo from "../images/logo.jpg";
import dataFetch from '../utils/dataFetch';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const query = `
query getProfile($token: String!){
  getProfile(token: $token){
    firstname
    lastname
    username
  }
}`;

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            token: '',
            firstname: '',
            lastname: '',
            profileSet: false,
            dataSet: false,
            isLoggedIn: false
        }
    }
    componentDidMount() {
        const firstname = localStorage.getItem('firstname');
        const token = cookies.get('token');
        if(token)
        {
            if (firstname == null) {
                this.setState({ token, isLoggedIn: true });
            } else { this.setState({ profileSet: true }); }
        }
    }

    componentDidUpdate() {
        if(!this.state.profileSet && this.state.isLoggedIn)  { this.setProfile(); }
        if (!this.state.dataSet && this.state.profileSet) { this.setData(); }
    }

    setProfile = async () => {
        const variables = { token: this.state.token };
        const response = await dataFetch({ query, variables });
        if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
            localStorage.setItem('firstname', response.data.getProfile.firstname);
            localStorage.setItem('lastname', response.data.getProfile.lastname);
            cookies.set('username', response.data.getProfile.username);
            this.setState({ profileSet: true, username: response.data.getProfile.username });
        }
    };

    setData() {
        const firstname = localStorage.getItem('firstname');
        const lastname = localStorage.getItem('lastname');
        const username = cookies.get('username');
        this.setState({ firstname, lastname, username, dataSet: true });
    }

    render() {
        return (
            <React.Fragment>
                <div className="navbar">
                    <Menu fixed="top" borderless>
                        <Menu.Item>
                            <Image size="mini" src={Logo}/>
                        </Menu.Item>
                        {this.dataSet ?
                            <Menu.Menu position="right">
                                <Menu.Item>
                                    <h3>{this.state.firstname} {this.state.lastname}</h3>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="/logout">Logout</a>
                                </Menu.Item>
                            </Menu.Menu> :
                            <Menu.Menu position="right">
                                <Menu.Item>
                                    <a href="/login">Sign In</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="/signup">Sign Up</a>
                                </Menu.Item>
                            </Menu.Menu>
                        }
                    </Menu>
                </div>
            </React.Fragment>
        );
    }
}

export default NavBar;
