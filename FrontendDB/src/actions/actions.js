import axios from "axios";

export const AUTH_INFO = 'AUTH_INFO';
export const AUTH_BOOL = 'AUTH_BOOL';

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_MY_CARD = "GET_MY_CARD";
export const NEW_CARD_DATA = "NEW_CARD_DATA";
export const NEW_CARD_CSS = "NEW_CARD_CSS";
export const ADD_NEW_CARD = "ADD_NEW_CARD";
export const EDIT_CARD_DATA = "EDIT_CARD_DATA";
export const EDIT_CARD_CSS = "EDIT_CARD_CSS";
export const EDIT_MY_CARD = "EDIT_MY_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const MY_DELETED_CARD = "MY_DELETED_CARD";
export const NO_CARD = "NO_CARD";

//Auth Actions 
export const authBool = () => {
  return dispatch => {
    dispatch({
      type: AUTH_BOOL
    })
  }
}

export const authenticated = (data) => {
  return dispatch => {
    dispatch({
      type: AUTH_INFO,
      payload: data
    })
  }
}

//~~~~~~~~~~ CARD ACTIONS ~~~~~~~~~~//

export const getAllCards = (id) => {
  return dispatch => {
    axios
      .get(`http://34.216.211.92:8000/all/${id}`)
      .then(response => {
        dispatch({
          type: GET_ALL_CARDS,
          payload: response.data
        })
      })
      .catch(err => {
        console.log("Error at getting all cards", err)
      })
  }
}

export const getMyCard = (id) => {
  return dispatch => {
    axios
      .get(`http://34.216.211.92:8000/specific/${id}`)
      .then(response => {
        if (response.data.is_deleted === true) {
          dispatch({
            type: MY_DELETED_CARD,
            payload: response.data
          })
        } else {
          dispatch({
            type: GET_MY_CARD,
            payload: response.data
          })
        }
      })
      .catch(err => {
        if (err.response.status === 500) {
          dispatch({
            type: NO_CARD
          })
        } else {
          console.log("Error at getting my card", err)
        }
      })
  }
}

export const newCardData = (id, info) => {
  return dispatch => {
    dispatch({
      type: NEW_CARD_DATA,
      id: id,
      payload: info
    })
  }
}


export const newCardCss = (style) => {
  return dispatch => {
    dispatch({
      type: NEW_CARD_CSS,
      payload: style
    })
  }
}

export const newCard = (body) => {
  console.log("WHAT IS ACTION BODY AT POST", body)
  return dispatch => {
    axios
      .post('http://34.216.211.92:8000/add', body)
      .then(response => {
        dispatch({
          type: ADD_NEW_CARD,
          payload: response.data
        })
      })
      .catch(err => {
        console.log("Error at getting all cards", err)
      })
  }
}

export const editCardData = (id, info) => {
  return dispatch => {
    dispatch({
      type: EDIT_CARD_DATA,
      id: id,
      payload: info
    })
  }
}

export const editCardCss = (style) => {
  return dispatch => {
    dispatch({
      type: EDIT_CARD_CSS,
      payload: style
    })
  }
}

export const editCard = (id, body) => {
  return dispatch => {
    axios
      .put(`http://34.216.211.92:8000/update/${id}`, body)
      .then(response => {
        dispatch({
          type: EDIT_MY_CARD,
          payload: response.data
        })
      })
      .catch(err => {
        console.log("Error updating card", err)
      })
  }
}

export const deleteCard = (id) => {
  return dispatch => {
    axios
      .delete(`http://34.216.211.92:8000/delete/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_CARD
        })
      })
      .catch(err => {
        console.log("Error deleting card", err)
      })
  }
}