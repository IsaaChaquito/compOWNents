
export const initialState = {
  text: '',
  isExpanded: false,
}

export const actions = {
  'console/SET_TEXT': ( state, action ) => (
    {
      ...state,
      text: action.payload
    }
  ),

  'console/CLEAR_TEXT': ( state ) => (
    {
      ...state,
      text: ''
    }
  ),

  'console/SET_IS_EXPANDED': ( state, action ) => (
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
