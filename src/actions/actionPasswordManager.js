import Firebase from '../firebase'
const db = Firebase.database()

const addPassword = payload => {
  return (dispatch) => {
    var newKey = db.ref('/passwordManager').push().key
    var newPassword = {
      id: newKey,
      url: payload.url,
      username: payload.username,
      password: payload.password,
      createdAt: Date(),
      updatedAt: ''
    }
    db.ref('/passwordManager/' + newKey)
    .set(newPassword)
    dispatch({
      type: 'ADD_PASSWORD',
      payload: newPassword
    })
  }
}

const getPassword = () => {
  return (dispatch) => {
    db.ref('/passwordManager').on('value', function(snapshot) {
      let passwordManager = []
      if ((snapshot.val())) {
        passwordManager = Object.values(snapshot.val())
      }
      dispatch({
        type: 'GET_PASSWORD',
        payload: passwordManager
      })
    })
  }
}

const editPassword = payload => {
  return (dispatch) => {
    var newPassword = {
      id: payload.id,
      url: payload.url,
      username: payload.username,
      password: payload.password,
      createdAt: payload.createdAt,
      updatedAt: Date()
    }
    db.ref('/passwordManager/' + payload.id)
    .set(newPassword)
    return ({
      type: 'EDIT_PASSWORD',
      payload: payload
    })
  }
}

const removePassword = payload => {
  return (dispatch) => {
    db.ref('/passwordManager/' + payload.id).remove()
    dispatch({
      type: 'REMOVE_PASSWORD',
      payload: payload
    })
  }
}

const actions = {
  addPassword,
  getPassword,
  editPassword,
  removePassword
}

export default actions
