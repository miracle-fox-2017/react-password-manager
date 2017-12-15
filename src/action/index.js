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
    db.ref().child('/contacts/profile').once('value')
    .then((snapshot) => {
      console.log('getUserData', snapshot.val())
      let contacts = []
      snapshot.forEach(a => {
        console.log('looping di foreach', a.val())
        contacts.push(a.val())
      })
      dispatch(getAllContacts(contacts))
    })
    .catch(err => console.error(err))
  }
}

export const sendUserData = (contact) => {
  return (dispatch) => {
    db.ref('/contacts/profile').push({
      url: contact.url,
      username: contact.username,
      password: contact.password
    })
    dispatch(getUserData())
  }
}
