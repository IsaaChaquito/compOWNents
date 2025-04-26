// export const initialState = {
//   items: [
//     {
//       id: 1,
//       name: 'Buttons',
//       link: '/buttons',
//     },
//     {
//       id: 2,
//       name: 'Inputs',
//       link: '/inputs',
//     },
//     {
//       id: 3,
//       name: 'Selects',
//       link: '/selects',
//     },
//     {
//       id: 4,
//       name: 'Tooltips',
//       link: '/tooltips',
//     },
//     {
//       id: 5,
//       name: 'Badges',
//       link: '/badges',
//     },
//     {
//       id: 6,
//       name: 'Textarea',
//       link: '/textarea',
//     },
//   ],
//   activeItem: 1,
// }

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
