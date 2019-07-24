//THIS WILL BE A SMART COMPONENT ONCE DATA IS IMPORTED
import React, { Component } from 'react';
import './styles.css';

import FeaturedCards from './FeaturedCards/FeaturedCards.jsx';

class Home extends Component {

  render() {
    return (
      <div id="top" className="home-body-container">
        <div className="banner-container">
          <a href="/newcardform" className="get-started">
            <button>GET STARTED</button>
          </a>
          <div className="grok-definition">
            <p className="definition-title">
              GROK
                </p>
            <p className="definition">
              to empathize or communicate sympathetically; <br /> establish a rapport.
                </p>
          </div>
          {/* <img className="banner" src="" alt="banner"/> */}
        </div>
        <div className="nav-bar-container">
          <div className="nav-bar">
            <a href="#about" className="nav-items">ABOUT GROK</a>
            <a href="#cards" className="nav-items">DESIGN YOUR OWN CARD</a>
            <a href="#social" className="nav-items">JOIN THE FAMILY</a> {/* Note: Social Media footer section*/}
          </div>
        </div>
        <div id="cards">
          <div className="card-example-container">
            <div className="card-example-header">
              {/* Design Your Own Cards */}
              <h2>Design Your Own Card</h2>
              <p>Choose from one of our templates or customize it and make it your own!</p>
            </div>
            <FeaturedCards />      {/* Note: change card styles to match the templates*/}
          </div>
        </div>
        <div id="about" className="about-info">
          {/* <AboutSectionComponent/> */}
          {/* <p className="definition-title">
            GROK
          </p>
          <p className="definition">
            to empathize or communicate sympathetically; establish a rapport. 
          </p> */}

        </div>
        <div id="social" className="social-media-footer">
          {/* [Add social media handles here] */}
        </div>
      </div>
    )
  }
}

export default Home;