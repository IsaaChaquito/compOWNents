

export const initialState = {
  options: {
    buttons: 'Buttons',
    inputs: 'Inputs',
    selects: 'Selects',
    tooltips: 'Tooltips',
  },
  isExpanded: true,
  optionSelected: 'Buttons',
}


export const actions = {
  SET_IS_EXPANDED: ( state, action ) => (
    {
      ...state,
      isExpanded: action.payload
    }
  ),

  SET_OPTION_SELECTED: ( state, action ) => (
    {
      ...state,
      optionSelected: action.payload
    }
  )

}

const drawerReducer = ( state = initialState, action ) => {
  return actions[action.type] ? actions[action.type]( state, action ) : state
}

export default drawerReducer