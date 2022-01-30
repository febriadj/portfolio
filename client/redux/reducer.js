const initialState = {
  darkmode: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/darkmode':
      return {
        ...state,
        darkmode: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
