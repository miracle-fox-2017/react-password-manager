const addPassword = (payload) => {
  return ({
    type: 'ADD_PASSWORD',
    payload: payload
  })
}

const getPassword = {
  type: 'GET_PASSWORD'
}

const removePassword = (payload) => {
  return ({
    type: 'REMOVE_PASSWORD',
    payload: payload
  })
}

const actions = {
  addPassword,
  getPassword,
  removePassword
}

export default actions
