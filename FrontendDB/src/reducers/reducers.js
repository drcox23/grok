import {
  AUTH_INFO,
  AUTH_BOOL,
  GET_ALL_CARDS,
  GET_MY_CARD,
  NEW_CARD_DATA,
  NEW_CARD_CSS,
  ADD_NEW_CARD,
  EDIT_CARD_DATA,
  EDIT_CARD_CSS,
  EDIT_MY_CARD,
  DELETE_CARD,
  MY_DELETED_CARD,
  NO_CARD
} from '../actions/actions.js'

const reducers = (state = {
  allCards: [],
  myCard: {
    user_id: "",
    data: {},
    style: {
      template: "",
      css: {
        back: {},
        company: {},
        front: {},
        info: {}
      }
    },
    users: [],
    addInfo: {},
    editInfo: {}
  },
  added: false,
  edited: false,
  authInfo: {}
}, action) => {

  switch (action.type) {
    //~~~~ Cases ~~~~//
    case AUTH_BOOL:
      console.log("IM AT AUTH BOOL")
      const bool = { isAuthenticated: true }
      return {
        ...state,
        authInfo: bool
      }
    case AUTH_INFO:
      const newAuthInfo = {
        isAuthenticated: true,
        user: action.payload
      }
      return {
        ...state,
        authInfo: newAuthInfo
      }
    case NO_CARD:
      let noCard = { ...state.myCard };
      noCard.no_card = true;
      return {
        ...state,
        myCard: noCard
      }
    case MY_DELETED_CARD:
      let deletedCard = { ...action.payload }
      delete deletedCard.data;
      deletedCard.stle.template = {};
      deletedCard.style.css = {
        back: {},
        company: {},
        front: {},
        info: {}
      }
      return {
        ...state,
        myCard: deletedCard
      }
    case GET_ALL_CARDS:
      if (!action.payload) {
        return { ...state }
      } else {
        const newPayload = action.payload.map(card => {
          let parsedAllCss = {};
          for (var key in card.style.css) {
            parsedAllCss[key] = JSON.parse(card.style.css[key])
          }
          let allStyle = { ...card.style, css: parsedAllCss }
          return {
            ...card,
            style: allStyle
          }
        })
        return {
          ...state,
          allCards: newPayload
        }
      }
    case GET_MY_CARD:
      let parsedMyCss = {};
      for (var key in action.payload.style.css) {
        parsedMyCss[key] = JSON.parse(action.payload.style.css[key])
      }
      const myStyle = { ...action.payload.style, css: parsedMyCss };
      const myData = { ...action.payload, style: myStyle };
      return {
        ...state,
        myCard: myData
      }
    case NEW_CARD_DATA:
      const newData = {
        user_id: action.id,
        data: action.payload,
        style: {
          template: "",
          css: {}
        }
      }
      return {
        ...state,
        addInfo: newData
      }
    case NEW_CARD_CSS:
      const newStyle = {
        ...state.addInfo,
        style: action.payload
      }
      // console.log("NEXT INFO: ", newCss);
      return {
        ...state,
        addInfo: newStyle
      }
    case ADD_NEW_CARD:
      console.log("ADD CARD", action.payload)
      return {
        ...state,
        addInfo: action.payload, added: true
      }
    case EDIT_CARD_DATA:
      console.log("EDIT CARD DATA: ", action.payload)
      const editData = {
        user_id: action.id,
        data: action.payload.data,
        style: action.payload.style
      }
      console.log("WHAT I'M EDITIING: ", editData)
      return {
        ...state,
        editInfo: editData
      }
    case EDIT_CARD_CSS:
      console.log("EDIT CARD CSS: ", action.payload)
      const editCss = {
        ...state.editInfo,
        style: action.payload
      }
      console.log("editCss", editCss)
      return {
        ...state,
        editInfo: editCss
      }
    case EDIT_MY_CARD:
      console.log("EDIT CARD", action.payload)
      return {
        ...state,
        editInfo: action.payload, edited: true
      }
    case DELETE_CARD:
      return {
        ...state, myCard: {
          user_id: "",
          data: {},
          style: {
            template: "",
            css: {
              back: {},
              company: {},
              front: {},
              info: {}
            }
          },
          users: [],
          addInfo: {},
          editInfo: {},
        }
      }
    default:
      return { ...state }
  }
}

export default reducers;