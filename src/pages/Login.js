import React from 'react';
import { Helmet } from 'react-helmet';
import 'babel-polyfill';
import { Container, Row, Col } from 'react-grid';
import LoginForm from '../components/login/loginForm';

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <div className="page-container">
          <Container>
            <Row>
              <Col md={4} lg={4}/>
              <Col md={6} lg={4} style={{top: 150}}>
                <LoginForm />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
