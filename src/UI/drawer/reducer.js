

export const initialState = {
  options: {
    buttons: {
      title: 'Buttons',
      link: '/buttons',
    },
    inputs: {
      title: 'Inputs',
      link: '/inputs',
    },
    selects: {
      title: 'Selects',
      link: '/selects',
    },
    tooltips: {
      title: 'Tooltips',
      link: '/tooltips',
    }
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