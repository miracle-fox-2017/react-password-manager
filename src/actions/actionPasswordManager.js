const addPassword = (payload) => {
  return ({
    type: 'ADD_PASSWORD',
    payload: payload  
  })
}

const getPassword = {
  type: 'GET_PASSWORD'
}

const removePassword = {
  type: 'REMOVE_PASSWORD'
}

const actions = {
  addPassword,
  getPassword,
  removePassword
}

export default actions
