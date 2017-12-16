const addPassword = payload => {
  return ({
    type: 'ADD_PASSWORD',
    payload: payload
  })
}

const getPassword = {
  type: 'GET_PASSWORD'
}

const editPassword = payload => {
  return ({
    type: 'EDIT_PASSWORD',
    payload: payload
  })
}

const removePassword = payload => {
  return ({
    type: 'REMOVE_PASSWORD',
    payload: payload
  })
}

const actions = {
  addPassword,
  getPassword,
  editPassword,
  removePassword
}

export default actions
