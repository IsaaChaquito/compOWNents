

export const initialState = {
  activeSection: 1,
  sections: [],
}

export const actions = {

  'rightSidebar/SET_SECTIONS': (state, action) => ({
    ...state,
    sections: action.payload
  }),

  'rightSidebar/SET_ACTIVE_SECTION': (state, action) => ({
    ...state,
    activeSection: action.payload,
  }),
}

export default (state = initialState , action) => {
  return actions[action.type] ? actions[action.type](state, action) : state
}
