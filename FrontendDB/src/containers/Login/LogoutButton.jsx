import React, { Component } from "react";
import { Auth } from 'aws-amplify'

class Logout extends Component {


  handleLogout = event => {
    console.log("logout initiated")
    Auth.signOut()
    .then( data => {
      console.log("Logged Out", data)
    })
    .then( event => {
    this.userHasAuthenticated(false);
    })
    .catch( err => {
      console.log(err)
    });
  }

  componentDidMount () {
    this.handleLogout();
    this.props.history.push('/')
  }
  

  render(){
    return(
    <div>Logout</div>
    )
  }

}

export default Logout