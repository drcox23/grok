import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import LoaderButton from "./LoaderButton/LoaderButton.jsx";
import "./Register.css";
import { Auth } from 'aws-amplify';
import { Button } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  componentDidMount() {
    console.log("REG PROPS", this.props)
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    // this.setState({ isLoading: true });
  
    Auth.signUp({
      username: this.state.email,
      password: this.state.password,
      attributes: { email: this.state.email }
      })
    .then( data => {
      console.log(data)
      this.setState({newUser: true})
    })
    .catch(e => {
      alert(e.message);
      this.setState({ isLoading: false })
    })
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();
  
    this.setState({ isLoading: true });
  
    try {
      await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
      await Auth.signIn(this.state.email, this.state.password);
  
      this.props.history.push("/");
      this.setState({ isLoading: false })
    } catch (e) {
      console.log("full error", e)
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  renderConfirmationForm() {
    return (
        <form onSubmit={this.handleConfirmationSubmit}>
          <FormGroup controlId="confirmationCode" bsSize="large">
            <ControlLabel>Confirmation Code</ControlLabel>
            <FormControl
              autoFocus
              type="tel"
              value={this.state.confirmationCode}
              onChange={this.handleChange}
            />
            <HelpBlock>Please check your email for the code.</HelpBlock>
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateConfirmationForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Verify"
            loadingText="Verifying…"
          />
        </form>
    );
  }

  renderForm() {
    return (
      <div className="signup-page-container">
      <div className="signup-container">
        <div className="signup-header">
          <h3>CREATE AN ACCOUNT</h3>
        </div>
      <form onSubmit={this.handleSubmit} className="signup-form-container">
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
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>CONFIRM PASSWORD</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="SIGN UP"
          loadingText="Signing up…"
        />
      </form>
      </div>
    </div>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}