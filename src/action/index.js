import db from '../scriptFirebase'

export const getAllContacts = (contacts) => {
  console.log(contacts)
  return {
    type: 'GET_ALL_USERS',
    payload: contacts
  }
}

export const getUserData = (dispatch) => {
  return (dispatch) => {
    db.ref().child('speed').once('value')
    .then((snapshot) => {
      console.log('getUserData', snapshot.val())
      dispatch(getAllContacts(snapshot.val()))
    })
    .catch(err => console.error(err))
  }
}

export const sendUserData = () => {
  return (dispatch) => {
    db.ref('/passwordmanagement').push({
      url: 'http://hacktiv8.com',
      username: 'yonathan',
      password: 'yonathan'
    })
  }
}
