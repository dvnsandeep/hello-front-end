import React from "react";
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
                <div className="navbar-nav ml-auto" style={{marginRight: '20vh'}}>
                    <a href="/login" className="nav-item nav-link pt-4 px-4">Sign In</a>
                    <a href="/signup" className="nav-item nav-link pt-4 px-4">Sign Up</a>
                </div>
            )
        };
        const loggedIn = () => {
            return (
                <div className="navbar-nav ml-auto">
                    <a href="/profile" className="nav-item nav-link px-4 pt-4">{this.state.firstname} {this.state.lastname}</a>
                    <a href="/logout" className="nav-item nav-link px-4 pt-4">Log Out</a>
                </div>
            )
        };
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md">
                    <div className="navbar-collapse">
                        {this.state.dataSet ? loggedIn(): notloggedIn()}
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;
