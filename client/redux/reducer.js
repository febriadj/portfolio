const initialState = {
  darkMode: [true, false][Math.floor(Math.random() * 2)],
}

const reducer = (state = initialState, action) => {
  if (action.type === 'counter/darkMode') {
    const updateState = {
      ...state, darkMode: action.payload.mode,
    }
    return updateState;
  }

  return state;
}

export default reducer;
