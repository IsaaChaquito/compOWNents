
const initialState = {
  text: '',
  isExpanded: false,
}

export const actions = {
  SET_TEXT: ( state, action ) => (
    {
      ...state,
      text: action.payload
    }
  ),

  CLEAR_TEXT: ( state ) => (
    {
      ...state,
      text: ''
    }
  ),

  SET_IS_EXPANDED: ( state, action ) => (
    {
      ...state,
      isExpanded: action.payload
    }
  )

}


const consoleReducer = ( state = initialState, action ) => {
  return actions[action.type] ? actions[action.type]( state, action ) : state
}

export default consoleReducer
