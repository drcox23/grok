import React, { Component } from 'react';
import './styles.css';
import Login from '../Login/Login.jsx'
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from '../../assets/logo.png'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: this.props.isAuthenticated,
      user: this.props.user
    }

    console.log('this.state.isAuthenticated', this.state.isAuthenticated)
  }

  componentDidMount() {
    Auth.currentUserInfo()
      .then(data => {
        this.setState({ user: data.username, isAuthenticated: true })
      })
      .catch(err => {
        console.log(err)
        this.setState({ user: {} })

      })
  }

  handleLogout = event => {
    console.log("logout initiated")
    Auth.signOut()
      .then(data => {
        console.log("Logged Out", data)
        this.setState({ user: {}, isAuthenticated: false })
      })
      .then(event => {
        // this.userHasAuthenticated(false);
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      });
  }



  render() {
    console.log('this.props.authInfo', this.props.authInfo);
    console.log('this.props', this.props)

    return (
      <div className="header-container">
        <div className="header">
          <div className="logo">
            {/* <a href="/"><h1>Grok</h1></a> */}
            <a href="/"><img src={logo} alt="logo" className="logo-image" /></a>
          </div>
          <div className="options">
            {!this.props.authInfo.isAuthenticated ? (
              <div className="options">
                <div className="signup">
                  <a href="/signup">
                    <div>SIGN UP</div>
                  </a>
                </div>
                <div className="login">
                  <a href="/login">
                    <div>LOG IN</div>
                  </a>
                </div>
              </div>
            ) : (
                <div className="options">
                  <div className="wallet">
                    <a href="/wallet">
                      <div> WALLET </div>
                    </a>
                  </div>
                  <div className="logout">
                    <a href="/" onClick={this.handleLogout}>
                      <div>LOG OUT</div>
                    </a>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.isAuthenticated,
  authInfo: state.authInfo
})

export default connect(mapStateToProps)(Header)