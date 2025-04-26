
export const initialState = {
  text: '',
  isExpanded: false,
  counter: 0
}

export const actions = {

  'console/SET_TEXT': ( state, action ) => (

    {
      ...state,
      text: action.payload,
      counter: state.text === action.payload ? state.counter+1 : 1
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
  ),

  'console/INCREMENT_COUNTER': ( state ) => (
    {
      ...state,
      counter: state.counter + 1
    }
  ),

}


const consoleReducer = ( state = initialState, action ) => {
  return actions[action.type] ? actions[action.type]( state, action ) : state
}

export default consoleReducer
