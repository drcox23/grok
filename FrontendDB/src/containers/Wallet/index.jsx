import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

//Card
import { Card, AllCards } from "../../CardComponent/CardComponent.jsx";
import { cardContainer, front, title, back, info, company, name, address, phone, email } from '../../CardComponent/CardClassing.js';
import './styles.css';

//Actions
import { getMyCard, getAllCards, deleteCard } from "../../actions/actions.js";
import { timingSafeEqual } from 'crypto';

// 
//Function to create links
const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <p className="userProfile-btns">{props.title}</p>
    </Link>
  )
}

class Wallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toEditCard: false,
      toWallet: false,
      cardClassName: "card",
    }
  }

  // componentDidMount = () => {
  //   if (this.props.authInfo.user) {
  //     const { user } = this.props.authInfo;
  //     this.props.dispatch(getMyCard(user))
  //     this.props.dispatch(getAllCards(user))
  //   }
  // }

  componentDidUpdate = (prevProps) => {
    // console.log("previous props", prevProps);
    if (this.props.added !== prevProps.added) {
      const { user } = this.props.authInfo;
      this.props.dispatch(getMyCard(user))
      this.props.dispatch(getAllCards(user))
    } else if (this.props.edited !== prevProps.edited) {
      const { user } = this.props.authInfo;
      this.props.dispatch(getMyCard(user))
      this.props.dispatch(getAllCards(user))
    } else if (this.props.authInfo.user !== prevProps.authInfo.user) {
      const { user } = this.props.authInfo;
      this.props.dispatch(getMyCard(user))
      this.props.dispatch(getAllCards(user))
    }
  }

  editRedirect = () => {
    this.setState({
      toEditCard: true
    })
  }

  deleteCard = (id) => {
    // const {user} = this.props.authInfo;
    this.props.dispatch(deleteCard(id));
    this.setState({
      toWallet: true
    })
  }

  cardClass = () => {
    if (this.state.cardClassName === "card") {
      this.setState({
        cardClassName: "card-flip"
      })
    }
    else if (this.state.cardClassName === "card-flip") {
      this.setState({
        cardClassName: "card"
      })
    }
  }

  render() {
    console.log("this.state.cardClassName", this.state.cardClassName)
    console.log("PROPS", this.props);
    const { user } = this.props.authInfo;

    const { myCard, allCards } = this.props;

    const { data, style } = myCard;

    if (myCard.no_card === true) {
      return <Redirect to='/newcardform' />
    }

    if (this.state.toWallet === true) {
      return <Redirect to='/wallet' />
    }

    if (this.state.toEditCard === true) {
      return <Redirect to='/editcardform' />
    }

    return (
      <div className="wallet-container">
        <div className="wallet-nav">
          <div className="nav-button">
            <LinkButton to='/wallet/mycard' title={"MINES"} />
          </div>
          <div className="nav-button">
            <LinkButton to='/wallet/othercards' title={"THEIRS"} />
          </div>  
        </div>

        {/***** WALLET CARD DISPLAY *****/}
        <div className="display-container">
          <Switch>
            <Route exact path='/wallet' render={() =>
              <div className="card-container">
                <div className="button-container">
                  <div className="edit-button">
                    <button onClick={() => { this.editRedirect() }}>
                      <img src="data:image/png;base64,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" alt="edit"/>
                    </button>
                  </div>
                  <div className="delete-button">
                    <button onClick={() => { this.deleteCard(user) }}>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADsCAMAAAA/3KjXAAAAgVBMVEX///8AAAB/f39vb2+UlJTZ2dkPDw+Kior8/Px7e3t2dnby8vL5+fnj4+PQ0NDW1tbr6+utra3KysrAwMBdXV2fn59nZ2empqZHR0e3t7c/Pz/ExMSRkZEdHR1VVVXf398sLCwzMzNQUFAVFRVBQUFJSUkkJCQ3NzcTExNiYmIbGxurcZ6bAAALyUlEQVR4nO2d6VrcvBKE47CGbSBhhxBIvkCS+7/Ac4ZhcJmR+pWtbpuHZ+rveCSVF6m7ulv69MkJBzebG09/msH487SxeXPgNRonXN0NJ6S4u5qaieDCh9MCF1OzecHRd09WTfP9aGpGc+z4kppjZ2pOn3Z/+7Nqmt9Ts7qPYNU097uT0nqIYdU0D1OyOo1i1TSn07FyndjfYrKJ/jiSVdMcT0TrrWVxd/Z1tjUQs69nK81Nw2rWHcXn/doG9z93W5x5jLI3unf3h0eTPzq28iSPq/NlPTrZ3geddXCKr+tMB1D9Ai6xr62eebXaA5fS/ze/Zr9Js5d+zZbiQLr/z7NhvV3ju5U6Dzo+rO7jGn8uvIq6qbvS8Pi+8mbb+ZNvy/+1LW/6tlwA8R43fFveaFse358UWnu+LX9Z03LHmlZPrGn5Y02rJ9a0/LGm1RNrWv5Y0+qJNS1/rGn1xKS0btvOv/i2LNrubU07h5sb/XHddv6wN+D/Wew9tS1fD/j/5uHK3fkY+DxntTf1KPyxtxL3+BjY+niv4Bw7K7G3D4G7yKj2dDiNSIKZHjufDqceQgQOO2L6R8GzcRKaXTEFXoKYB1ebaZz9bK+9zFwzKiSk9zN3zQkHfOUFdQ6LDIMEU2piRCfytNzGVgF5WicVzdy0zWy7ja0C2+14biqaUYPRbWwVkOHUhJU1pcQt9WI4NGmjJhVFsxQO3UY3GGo6VIXh5WV+B/nOR16f+kPb0DtIvJekibqkV1mP30HavdhDP6saEkVg+uR0PxEvTg0cAreb7PbYXeD2SUhe1aPT2Crw2I6mLntMptR3YGbIYOqWm3dlZngZGZ4tOcDxHktL0+RvCxwNbyk5c83xHAKZv75XNuXkuLlAnNra7GBxs6uCTR6QkFqtBCES/WeXsb2PsUgS/4QVVQuIrl6b+C++gJVp/GPvsbk0DZqb0+3tU1OAuLhsHvesUhUJU9Z6SV/bpn7lr3p5po/51eR8ccV59oL9R3wOv9qxfC0Zu4EiP/t15r3PXfEavc+Gz19rZrLriKcCUbSyt9JAZhGQm5OxVdrJO+vOe1o8WkOQe+9/tJdkSq5k4sm8ZHe9ummq63elrdwLLav/ffoKnpqlbiv3FspnXu9NFEw/0l/mDWJaInHl7p6bQDPHOb4/BSYo05Imcia1xDn+9mWxgoIMpC1fWluZbkRXqU9HknuUW3R0EUhf0YtWbvKW96a+UqggFsSLANIqmbylAKremeBprrNOpseEtPTO5Fb9gsmyHCWrhVySXnSQlvaS6URX0NznV46S+yiXpKcxpFXgz/M70Qd6k3Ifs1ySFrqQVoFwpxOTwyYhOOaOLJl2PZCWRHNzMquzZFkgpUomaNoSQVpiQVxnOnEWmAt8UtHG01Mv0pJlJKf1O/vpBSKNmN9p5khLxpzbd8FRoClsDu3GPrRytoyzBlYQC8K4E9IqiKM5B0YLRBo0QpFWgUHtKNDMUbBSYmoU0ipIZpJheEQD2D7XLyPtCSGtv+0FuelWhuGRIlJgtMjnl57HkJbMpZkPp8SI6wV++rLqpBdTpCULesbpcE+/klhQRpVFAwBpsSkj5pWhw/YAz6xoriEtaSBjeLrnHLCzPQatAvGhH3ipRI2mD62Mi+iez8M2JrpCRKvAqXOMAi3AToMKLEmNhmhhAwXOT1+w/6Y3O7m0ES1dlDKer1zhk9lYIJ/IFUmNhmj166JeoJmjQMOjPokW68IB6Tz0LDj3lWhxtmrB8+wLDm6SMkm0WGPlqExvcMoJTVNEiydbx1STJXjJkK2Qk8SJlgw6swFyQCIFxzvIr6AW0LOJSHthc4zMRhpUfQ8DwK8IGWxEi83OgJQyjkWTRkO0WKGRIdTUAinYMSUtkWixBihD8ErX5BWe1EuihfppRHItuw00kxEtdMCdo0ALYF0QSaREC6XNkMR17FX0k2QWLdFCFagw/68f8B2huZJoyd/TVmdIUQjqCPSO9KCVfstDSngwFkT+Ug9aaR8xJBMaTTZKpgRanAAZUh6HefW0rAAtXhhDqgxweqXwQw9a6bCBXOBXeop3k94ioIUJwfvQ/jBgLIgSd4CWzjhJGyKo3kpaTRuaIHcALcxKV2Pb8ZgdTA6DC4AWKjRBtYzoxIF5BbTQNAoQaObA1RBSGIEWpmI6p5osgRkKoNEALVzug7YsRDkLFBSghQqNexRoAUxBh9sJtPBleGgv8NwxAaViGBjQwnesIPl/CNAMkG865TgALXF8kjOSmgMuZxG9AKOFoNEALVJoCoKVg4B1QeC9Ai1yOzQK5HpmihwglRQbYEEFWqSVhO3LRB2DRwa0yJtyrQVSkLIP9xNo0a5UrrVAmXElp2BwNIGW/DnpJLrWAinIDgCPyaaFZRYBUaAFKAoKfp5NCwV2TssbCKoqgJWlnFZyWXLbrOUtqC4IbrhNi1x631qgPj2DRmPTItMsbosVFCjl94TaYdOisKDbjnDmsJM29B/zd5uW+Ad/Um27Fhx3QSKNbSjYtEiACdxsivxToZ2wrmxasnrcp9ouqKsZCooFiUZTQyupK8Udo4faj13rZNOipxF4hh+lnNhFIjYtKlGRjCrvTRLls036BrYcYdMiS/ah/d17S0taW+yB1/waFAVagBIj7OCuPXCYjkpKhIeCYkF2rZNNC6qcQnfdk7ZTsSB7SrFpQZJl6FbMEsFKOea2RmPTAqFEnCJ/WiB62SEqmxYYZiLWZdIZKwDVi3Z6kE0LUoPca4EUkMdiazQ2LflragLfM/9cCYhB2e6zSYsUdqxBrwGINHZqRTGt1NoRJtDMAUqgvbiYtMinl589o0ALQJGHPTaTFi238rNnFKhk3CB2mLQgHqKsA/bAldZTqpb8vGqFmLTAiuAiqCpAoLOxfjZpgQITKNDMAZabGQEzaclKnhKeglJNlgA727SATFqQGhS8qSo4e2YejflfeBzyX+cDKp8Bu0eYiptJCx6HvCW+UaAFQKQxTWGTFig0gQLNHJByYnruJi0wottf3WqBFLB+mCMf/mP41u1g45j6qDlyO6svfKN9aT9hm5kfvknLlvcDCo67kPYT3p45o5i07HU+/BALu7jY9MdMWsXt+tUCKewMTzPTxaT1YNIKPyDGFl/NXACTlq3QBEaBFrCXTfMbMGnJHxMzePipCLZIY2o0Fi1I6gsVaOaQ1+zf6q9mON6iBUkE/9pfY04csadaU3oqpZVYb+XXmGPobM3MtAYsWrb1En9ooN2D+YlYtGwzIjDVZAnpITFlWb9atGyFJqgWSPHQ9pD4eqX/FY3GomVLMAVbZtfCNt4sZaqQVsKPCxZo5rBXRiuPxqJl59CIv+MfBVrAdmOtGi+Lll3lNMIJj7aWYrlNFq3iViMEmjnsz1de0ZWntWkMTp5WwtS0U8RcYM9ZMryVVU3+uTKdyMqUmIga459OgKXx9beEjPgazE+4gu17tvpbVC2QAtSSpTT1aEVzUjGkpcOVCMSMccAj1QUdPzsRX5LGwP5ziv55cmi7z3lgdymTL6wWSIGbkOzPZlkL52A2yw5sdzZLPwv3bWdTcN+oEhFWC6QIq/XIQlaGuKP1AvZnew89hqbpJCHvR9yxlQXnVzgjNNVkCVukiUC4QDOH6+lyJdCVMu4A39EPdR7nuOV4GegNDse5j9JLlD3dQXCqyRKuJ3sVwPHgZguSLDzKoc7iw90HdiMueJSy0IGoJzHBrQWkkiR3fp8rRPbx2+huFRILGuN8e11QYqJAC2jQZISjxeUdjJ15pZ/4x6UPK9aqkTkjTDx+hSS9uRdFdvFNb6DvJg8r+Kt9BXvj2lXzO0w1+b+h9rvTVVxHzzjrdBY3P12M1M8SzRtsnBxtOePoZONtL9Gsul/XWBhB5zrnUXgjeG56xu53Hocvfo3iiR/zQHwxgpk2xyGPxBNRkZIVHG/zYNww0rOaY/eUh+ODu8AVP4ErHpEHRvHBFQe3PKha7Iz7qF6InVzzyIbj+mIKUs/Yv7k9v/637Yx/T+e33+pkwf8BaySfjAdGvuUAAAAASUVORK5CYII=" alt="delete"/>
                    </button>
                  </div>
                </div>              
                <div className="display-container" onClick={()=> {this.cardClass()}}>
                  <Card 
                      cardContainer={this.state.cardClassName}
                      front={front}
                      title={title}
                      back={back}
                      info={info}
                      company_name={company}
                      name={name}
                      address={address}
                      phone={phone}
                      email={email}
                      data={data}
                      styles={style.css}
                  />
                </div>
              </div>
            }
            />

            {/***** MY CARD DISPLAY *****/}
            <Route exact path='/wallet/mycard' render={() =>
            <div className="card-container">
              <div className="button-container">
                <div className="edit-button">
                  <button onClick={() => { this.editRedirect() }}>
                    <img src="data:image/png;base64,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" alt="edit"/>
                  </button>
                </div>
                <div className="delete-button">
                  <button onClick={() => { this.deleteCard(user) }}>
                    <img src="data:image/png;base64,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" alt="delete"/>
                  </button>
                </div>
              </div>  
              <div className="display-container" onClick={()=> {this.cardClass()}}>
                <Card
                  cardContainer={this.state.cardClassName}
                  front={front}
                  title={title}
                  back={back}
                  info={info}
                  company_name={company}
                  name={name}
                  address={address}
                  phone={phone}
                  email={email}
                  data={data}
                  styles={style.css}
                />              
              </div>           
            </div>
            }
            />

            {/***** ALL CARDS IN WALLET *****/}
            <Route exact path='/wallet/othercards' render={() =>
              <AllCards
                cardContainer={cardContainer}
                front={front}
                title={title}
                back={back}
                info={info}
                company_name={company}
                name={name}
                address={address}
                phone={phone}
                email={email}
                cards={allCards}
              />}
            />
          </Switch>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    authInfo: state.authInfo,
    myCard: state.myCard,
    allCards: state.allCards,
    added: state.added,
    edited: state.edited
  }
}

export default connect(mapStateToProps)(Wallet)