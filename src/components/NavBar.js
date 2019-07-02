import React from "react";
import { Menu  } from "semantic-ui-react";
import Cookies from 'universal-cookie';


const cookies = new Cookies();

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: '',
            firstname: '',
            lastname: '',
            dataSet: false,
        }
    }
    componentDidMount() {
        const firstname = localStorage.getItem('firstname');
        const lastname = localStorage.getItem('lastname');
        const token = cookies.get('token');
        if(token) {
            this.setState({ token, dataSet: true , firstname, lastname});
        }
    }

    render() {
        const notloggedIn = () => {
            return (
                <Menu.Menu position="right">
                    <Menu.Item>
                        <a href="/login">Sign In</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/signup" style={{marginRight: '50px'}}>Sign Up</a>
                    </Menu.Item>
                </Menu.Menu>
            )
        };
        const loggedIn = () => {
            return (
                <Menu.Menu position="right">
                    <Menu.Item>
                        <h5><a href="/profile" style={{textDecoration: 'none', color: 'white'}}>{this.state.firstname} {this.state.lastname}</a></h5>
                    </Menu.Item>
                    <Menu.Item>
                        <h4><a href="/logout" style={{textDecoration: 'none', color: 'white', marginRight: '50px'}}>Logout</a></h4>
                    </Menu.Item>
                </Menu.Menu>
            )
        };
        return (
            <React.Fragment>
                <div className="navbar">
                    <Menu fixed="top" inverted borderless>
                        <Menu.Item>
                            <h1 style={{fontWeight: '900', marginLeft: '50px'}}>Hello</h1>
                        </Menu.Item>
                        {this.state.dataSet ? loggedIn(): notloggedIn()}
                    </Menu>
                </div>
            </React.Fragment>
        );
    }
}

export default NavBar;
