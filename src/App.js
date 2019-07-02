import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import '@blueprintjs/core/lib/css/blueprint.css';
import './styles/style.sass';
import Cookies from 'universal-cookie';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';

const cookies = new Cookies();

function HomePage() {
    const token = cookies.get('token');
    if (token) return <Redirect to="/dashboard" />;
    return <Home />
}

function LoginPage() {
  return <Login />;
}

function SignUpPage() {
  return <Signup />;
}

function LogoutPage() {
  cookies.remove('token');
  return <Redirect to="/" />;
}

function ProfilePage() {
  return <Profile />;
}

function DashboardPage() {
  const token = cookies.get('token');
  if (token) return <Dashboard />;
}

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
	  <Route exact path="/profile" component={ProfilePage} />
    </Switch>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hello App</title>
      </Helmet>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.Fragment>
);
}
