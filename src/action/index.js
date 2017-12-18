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
      snapshot.forEach((a, index) => {
        console.log('looping di foreach', a.val(), a.key)
        let objekUser = a.val()
        let obj = {
          key: a.key,
          username: objekUser.username,
          password: objekUser.password,
          url: objekUser.url
        }
        console.log('isi obj ', obj);
        contacts.push(obj)
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
      password: contact.password,
      enableEdit: contact.enableEdit
    })
    dispatch(getUserData())
  }
}

export const updateProfile = (updateProfile) => {
  return (dispatch) => {
    db.ref(`/contacts/profile/${updateProfile.key}`.update({
      url: updateProfile.url,
      username: updateProfile.username,
      password: updateProfile.password
    }))
    dispatch(getUserData())
  }
}