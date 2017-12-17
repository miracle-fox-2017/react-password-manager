import firebase from 'firebase'

export const users = (payload) => {
  return {
    type: 'GET_ALL_USERS',
    payload
  }
}

export const getUsers = (dispatch) => {
  let dbRef = firebase.database().ref().child('passwordlist')
  firebase.database().ref().child('passwordlist').on('value', snap => {
    var returnArr = []
      snap.forEach(function(childSnapshot) {
        var item = childSnapshot.val()
        item.key = childSnapshot.key

        returnArr.push(item)
      })
    dispatch(users(returnArr)) 
  })
}