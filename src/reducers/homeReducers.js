const initialState = {
  users: [{
    id: 1,
    url: 'hacktiv8.id',
    username: 'nandirasp',
    password: 'Qwerty12'
  }, {
    id: 2,
    url: 'google.id',
    username: 'patur',
    password: 'asdfG524'
  }]
}

const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return state
    default:
      return state      
  }
}

export default homeReducers