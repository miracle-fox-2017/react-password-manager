const initialState = {
  activeMenu: 'home' 
}

const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_MENU':
      return {...state, activeMenu: action.payload}
    default:
      return state      
  }
}

export default homeReducers