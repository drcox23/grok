import React from 'react';
import './styles.css'

export const Card = (props) => {
  const { data, styles } = props;
  console.log('card data', data)
  console.log('card styles', styles)
  return (
    <div key={props.user_id} className={props.cardContainer}>
      <div className={props.back} style={styles.back}>
        <div className={props.company} style={styles.company}>{data.company_name}</div>
      </div>
      <div className={props.front} style={styles.front}>
        <div className={props.info} style={styles.info}>
          <div className={props.name} style={styles.name}>{data.name}</div>
          <div className={props.title}>{data.title}</div>
          <div className={props.address}>{data.address}</div>
          <div className={props.phone}>{data.phone}</div>
          <div className={props.email}>{data.email}</div>
        </div>
      </div>
    </div>
  )
}

export const AllCards = (props) => {
  console.log('all cards props', props);


  return props.cards.map(card =>
    <div key={card.user_id} className={props.cardContainer}>
      <div className={props.back} style={card.style.css.back}>
        <div className={props.company} style={card.style.css.company}>{card.data.company_name}</div>
      </div>
      <div className={props.front} style={card.style.css.front}>
        <div className={props.info} style={card.style.css.info}>
          <div className={props.name} style={card.style.css.name}>{card.data.name}</div>
          <div className={props.title}>{card.data.title}</div>
          <div className={props.address}>{card.data.address}</div>
          <div className={props.phone}>{card.data.phone}</div>
          <div className={props.email}>{card.data.email}</div>
        </div>
      </div>
    </div>
  )
}

export const DisplayCard = (props) => {
  return (
    <div key="card" className={props.cardContainer}>
      <div className={props.back}>
        <div className={props.title}>COMPANY NAME</div>
      </div>
      <div className={props.front}>
        <div className={props.info}>
          <div className={props.name}>Company Name</div>
          <div className={props.title}>Title</div>
          <div className={props.address}>Address <br /> City, State, Zip Code</div>
          <div className={props.phone}>Phone No.</div>
          <div className={props.email}>Email</div>
        </div>
      </div>
    </div>
  )
}

