import React from 'react';
import { Button, Card, FormGroup, InputGroup, Callout } from '@blueprintjs/core';
import { Row, Col } from 'react-grid';

import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';

import dataFetch from '../../utils/dataFetch';

const cookies = new Cookies();

const query = `
mutation createuser($email: String!, $password: String!, $confirm: String!,$username: String!, $firstname: String!, $lastname: String!, $imageUrl: String! ) {
    createUser(email: $email, password: $password, confirm: $confirm, username: $username, firstname: $firstname , lastname:$lastname , imageUrl: $imageUrl){
      token
      username
      firstname
      lastname
      imageUrl
    }
} `;

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm: '',
      firstname: '',
      lastname: '',
      username: '',
      imageUrl: '',
      cookieSet: false,
      authFail: false,
    };
    this.firstnameEntry = this.firstnameEntry.bind(this);
    this.lastnameEntry = this.lastnameEntry.bind(this);
    this.usernameEntry = this.usernameEntry.bind(this);
    this.confirmEntry = this.confirmEntry.bind(this);
    this.passwordEntry = this.passwordEntry.bind(this);
    this.emailEntry = this.emailEntry.bind(this);
    this.imageUrlEntry = this.imageUrlEntry.bind(this);
  }

  signup = async () => {
    const variables = {
      email: this.state.email,
      password: this.state.password,
      confirm: this.state.confirm,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      imageUrl: this.state.imageUrl,
    };
    const response = await dataFetch({ query, variables });
    if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
      cookies.set('token', response.data.createUser.token, { path: '/' });
      cookies.set('username', response.data.createUser.username, { path: '/' });
      localStorage.setItem('firstname', response.data.createUser.firstname);
      localStorage.setItem('lastname', response.data.createUser.lastname);
      localStorage.setItem('avatar', response.data.createUser.imageUrl);
      this.setState({ cookieSet: true });
    } else {
      this.setState({ authFail: true });
    }
  };
  imageUrlEntry(event) {
    this.setState({ imageUrl: event.target.value });
  }
  usernameEntry(event) {
    this.setState({ username: event.target.value });
  }

  firstnameEntry(event) {
    this.setState({ firstname: event.target.value });
  }

  lastnameEntry(event) {
    this.setState({ lastname: event.target.value });
  }

  confirmEntry(event) {
    this.setState({ confirm: event.target.value });
  }

  passwordEntry(event) {
    this.setState({ password: event.target.value });
  }

  emailEntry(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    if (this.state.cookieSet) return <Redirect to="/" />;

    const errorMessage = (
      <div style={{ padding: '1rem 0rem' }}>
        <Callout intent="danger">User already exists.</Callout>
      </div>
    );

    return (
      <Card elevation="2" className="signup-card">
        <h1>Sign Up</h1>
        {this.state.authFail ? errorMessage : null}
        <form
          onSubmit={e => {
            this.signup();
            e.preventDefault();
          }}
        >
          <Row>
            <Col>
              <FormGroup label="firstname" labelFor="text-input">
                <InputGroup onChange={this.firstnameEntry} placeholder="Enter your FirstName" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup label="lastname" labelFor="text-input">
                <InputGroup onChange={this.lastnameEntry} placeholder="Enter your LastName" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup label="email" labelFor="text-input">
            <InputGroup onChange={this.emailEntry} placeholder="Enter your email" />
          </FormGroup>
          <FormGroup label="username" labelFor="text-input">
            <InputGroup onChange={this.usernameEntry} placeholder="Enter your username" />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup label="Password" labelFor="text-input">
                <InputGroup
                  placeholder="Enter your password"
                  onChange={this.passwordEntry}
                  type="password"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup label="Password" labelFor="text-input">
                <InputGroup
                    placeholder="Confirm Your Password"
                    onChange={this.confirmEntry}
                    type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup label="Image Url" labelFor="text-input">
            <InputGroup onChange={this.imageUrlEntry} placeholder="Enter your Image Url" />
          </FormGroup>
          <Button type="submit" intent="primary" text="Sign Up" />
          <a href="/login"> Already have an account? Login</a>
        </form>
      </Card>
    );
  }
}

export default SignUpForm;
