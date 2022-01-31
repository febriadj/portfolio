const initialState = {
  darkmode: true,
  isLoggedIn: false,
  user: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/darkmode':
      return {
        ...state,
        darkmode: action.payload,
      }
    case 'counter/isLoggedIn':
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    case 'counter/user':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
