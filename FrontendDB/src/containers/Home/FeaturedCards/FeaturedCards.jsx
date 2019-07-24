import React, { Component } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

import { DisplayCard } from '../../../CardComponent/CardComponent.jsx'
import { cardContainer, name, address, phone, email } from '../../../CardComponent/CardClassing.js'

import { generateKeyPair } from 'crypto';
import cardBackground1 from "../../../assets/card-background1.jpg";
// import { url } from 'inspector';
import cardBackground3 from '../../../assets/card-background3.jpg';

const background1 = `url(${cardBackground1})`;
const background3 = `url(${cardBackground3})`;

class FeaturedCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  componentWillMount() {
    console.log('willMount Hits');
  }

  componentDidMount() {
    console.log('didMount Hits');
    console.log(React.version)
  }



  render() {
    console.log("this.state", this.state)
    return (

      <div className="featured-card-container">
        <div className="featured-card">
          <a href="/newcardform">
            <DisplayCard
              cardContainer={cardContainer}
              back={"card-back one-back"}
              title={"one-title"}
              front={"card-info one-front"}
              info={"one-info"}
              name={name}
              address={address}
              phone={phone}
              email={email}
            />
          </a>
        </div>
        <div className="featured-card">
          <a href="/newcardform">
            <DisplayCard
              cardContainer={cardContainer}
              back={"card-back two-back"}
              title={"two-title"}
              front={"card-info two-front"}
              info={"two-info"}
              name={name}
              address={address}
              phone={phone}
              email={email}
            />
          </a>
        </div>
        <div className="featured-card">
          <a href="/newcardform">
            <DisplayCard
              cardContainer={cardContainer}
              back={"card-back three-back"}
              title={"three-title"}
              front={"card-info three-front"}
              info={"three-info"}
              name={name}
              address={address}
              phone={phone}
              email={email}
            />
          </a>
        </div>
        <div className="featured-card">
          <a href="/newcardform">
            <DisplayCard
              cardContainer={cardContainer}
              back={"card-back four-back"}
              title={"four-title"}
              front={"card-info four-front"}
              info={"four-info"}
              name={name}
              address={address}
              phone={phone}
              email={email}
            />
          </a>
        </div>
        {/* <div className="featured-card">
          <div className=cardContainer>
            <div 
              className="card-back"
              style={styles.front}
            > 
              <div style={styles.title}>Company Name</div>
            </div>
            <div 
              className="card-info"
              style={styles.back}
            >
              <div style={styles.info}>
                <h3>Company Name</h3>
                <p>Address</p>
                <p>Email</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

// card styling 
const styles = {
  front: {
    backgroundImage: background1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  title: {
    margin: "5% 5% 0 0",
    textAlign: "right",
    color: "black"
  },
  back: {
    backgroundImage: background3,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white"
  },
  info: {

  }
}


export default FeaturedCards;

// card styling 
// const styles = {
//   container: {  //featured-card
//     margin: "0 1% 0 1%",
//     backgroundColor: "transparent",
//     width: "25vw", 
//     height: "25vh",
//     perspective: "1000px",
//   },
//   containerHover: {   // featured-card:hover
//     margin: "0 1% 0 1%",
//     backgroundColor: "transparent",
//     width: "25vw", 
//     height: "25vh",
//     perspective: "1000px",
//     transform: "rotateX(180deg)",
//   }, 
//   card: { // card
//     position: "relative", 
//     width: "100%", 
//     height: "100%",
//     transition: "transform 2s",
//     transformStyle: "preserve-3d",
//     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
//     transform: "rotateX(180deg)"
//   },
//   // cardHover: {
//   //   position: "relative", 
//   //   width: "100%", 
//   //   height: "100%",
//   //   transition: "transform 2s",
//   //   transformStyle: "preserve-3d",
//   //   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
//   //   transform: "rotateX(180deg)"
//   // },
//   front: {  
//     backgroundImage: background1,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat"
//     // color: "black", 
//     // position: "absolute", 
//     // width: "100%", 
//     // height: "100%", 
//     // backfaceVisibility: "hidden", 
//     // boxShadow: "5px 5px 10px grey", 
//     // zIndex: "1",
//     // backgroundColor: "grey"
//   },
//   title: {
//     margin: "5% 5% 0 0",
//     textAlign: "right",
//     color: "blue"
//   },
//   back: {
//     backgroundImage: "url(" + cardBackground3 + ")",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat", 
//     color: "white",
//   },
//   info: {
//     position: "absolute", 
//     width: "100%",
//     height: "100%",
//     backfaceVisibility: "hidden", 
//     boxShadow: "5px 5px 10px grey",
//     transform: "rotateX(180deg)",
//     zIndex: "2",
//   }
// }
