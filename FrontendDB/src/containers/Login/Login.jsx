import React, { Component } from "react";
import { Auth } from 'aws-amplify';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom';

import { authBool } from '../../actions/actions.js';

// import history from "../../history"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isAuthenticated: "",
      toHome: false
    };
  }

  componentDidMount() {
    console.log("LOGIN PAGE")
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    Auth.signIn(this.state.email, this.state.password)
      .then(user => {
        console.log("Auth User", user)
        this.setState({ isAuthenticated: true });
        alert("Logged in");
      })
      .then(result => {
        console.log("GOING HOME")
        // this.props.history.push('/')
        this.props.dispatch(
          authBool()
        )
        this.setState({
          toHome: true
        })
      })
      .catch(err => {
        console.log("Auth Error", err)
        alert(err.message);

      })
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className="login-page-container">
        <div className="login-container">
          <div className="login-header">
            <h3>WELCOME BACK</h3>
          </div>
          <form onSubmit={this.handleSubmit} className="login-form-container">
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>EMAIL</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>PASSWORD</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <div className="login-button-container">
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.isAuthenticated
})

export default connect(mapStateToProps)(Login)