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
    db.ref().child('/profile').once('value')
    .then((snapshot) => {
      console.log('getUserData', snapshot.val())
      dispatch(getAllContacts(snapshot.val()))
    })
    .catch(err => console.error(err))
  }
}

export const sendUserData = (contact) => {
  return (dispatch) => {
    db.ref('/profile').set({
      url: contact.url,
      username: contact.username,
      password: contact.password
    })
    dispatch(getUserData())
  }
}
