import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'
// import { withAuthenticator, includeGreetings } from 'aws-amplify-react'

//~~~~ COMPONENTS ~~~~//
import Header from '../Header/HeaderComponent.jsx'
import Footer from '../Footer/FooterComponent.jsx'

//~~~~ Actions ~~~~//
import { authenticated } from '../../actions/actions.js'

//~~~~ CONTAINERS ~~~~//

import Home from '../Home/index.jsx';
import Wallet from "../../containers/Wallet/index.jsx";
// import MyCard from "../../containers/Wallet/MyCard/MyCard.jsx";
import NewCardForm from "../NewCard/NewCardForm/NewCardForm.jsx";
// import DesignForm from "../../containers/NewCard/DesignForm/DesignForm.jsx";

import Login from '../Login/Login.jsx'
import Register from '../Register/Register.jsx'
import EditCardForm from '../EditCard/EditCardForm/EditCardForm.jsx';
// import Logout from '../../components/LogoutButton.jsx';
// import { NOTFOUND } from 'dns';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // console.log("APP state", this.state)
    // console.log("session", Auth.currentUserInfo().then(data => console.log(data)))

    // console.log("APP MOUNT STATE", this.state)
    Auth.currentUserInfo()
      .then(data => {
        console.log("AUTH DATA", data);
        this.props.dispatch(
          authenticated(data.attributes.sub)
        )
      })
      .catch(err => {
        console.log(err)
        this.setState({ user: {} })
      })

  }

  // userHasAuthenticated = authenticated => {
  //   this.setState({ isAuthenticated: this });
  // }
  // handleLogout = event => {
  //   console.log("logout initiated")
  //   Auth.signOut()
  //   .then( data => {
  //     console.log("Logged Out", data)
  //   })
  //   .then( event => {
  //   // this.userHasAuthenticated(false);
  //   this.props.history.push('/')
  //   })
  //   .catch( err => {
  //     console.log(err)
  //   });
  // }



  render() {
    console.log("HOME PROPS", this.props)
    const { authInfo } = this.props;
    const { user } = authInfo;
    const childProps = authInfo;

    return (
      <div className="App">
        {/* <Header props={childProps}/>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} props={childProps} />
            <Route path='/logout' text="Logout" onClick={this.handleLogout} /> 
            <Route path='/login' component={Login} props={childProps} />
            <Route path='/signup' component={Register} props={childProps} />
            
          </Switch>
        </Router> */}
        <Header />

        <Router>

          <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} props={childProps} />
            <Route path='/signup' component={Register} props={childProps} />

            <Route exact path="/newcardform" component={NewCardForm} />
            <Route exact path="/editcardform" component={EditCardForm} />

            <Route exact path='/wallet' component={Wallet} />
            <Route exact path='/wallet/mycard' component={Wallet} />
            <Route exact path='/wallet/othercards' component={Wallet} />

          </Switch>

        </Router>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authInfo: state.authInfo
})

export default connect(mapStateToProps)(App);
