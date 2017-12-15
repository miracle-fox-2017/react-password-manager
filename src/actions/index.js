import firebase from 'firebase'

export const getUsers = () => {
  return dispatch => {
    firebase.database().ref('users')
    .on('value', function(snapshot) {
      let getusers = []
      snapshot.forEach(function(anakSnap) {
        getusers.push(anakSnap.val())
      })
      dispatch({
        type: 'GET_USERS',
        allusers: getusers
      })
    })
  }
}
export const saveUser = (user) => {
  
  let newUser = {
    url: user.url,
    username: user.username,
    password: user.password
  }
  firebase.database().ref('users').push(newUser)
}