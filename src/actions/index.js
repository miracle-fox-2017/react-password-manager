import * as firebase from 'firebase'

let config = {
  apiKey: "AIzaSyCCRX9837cZkHpxQBoM-7Ntoob01pUE7Tw",
  authDomain: "usermanager-ef8a3.firebaseapp.com",
  databaseURL: "https://usermanager-ef8a3.firebaseio.com",
  projectId: "usermanager-ef8a3"
}
let db = firebase.initializeApp(config).database().ref('users')

export const getUsers = () => {
  return dispatch => {
    db.on('value', function(snapshot) {
      let getusers = []
      snapshot.forEach(function(anakSnap) {
        const dedekKey = anakSnap.key
        const dedekSnap = anakSnap.val()
        dedekSnap.key = dedekKey
        getusers.push(dedekSnap)
      })
      dispatch({
        type: 'GET_USERS',
        allusers: getusers
      })
    })
  }
}
export const saveUser = user => {
  let create = new Date()
  let update = null
  let newUser = {
    url: user.url,
    username: user.username,
    password: user.password,
    createdAt: create.toISOString(),
    updatedAt: update
  }
  db.push(newUser)
  return {
    type: 'ADD_USER'
  }
}

export const removeUser = user => {
  db.child(user.key).remove()
  return {
    type: 'REMOVE_USER'
  }
}

export const updateUser = user => {
  user.updatedAt = new Date().toISOString()
  db.child(user.key).update(user)
  return {
    type: 'UPDATE_USER'
  }
}

export const searchUsers = keyword => {
  console.log('YANG DI ACAR', keyword)
  return dispatch => {
    if(keyword.trim() !== ''){
      db.orderByChild("password").equalTo(keyword).on("child_added", function(data) {
        if(data){
          dispatch ({
            type: 'SEARCH_USERS',
            allusers: [data.val()]
          })
        } else {
          dispatch ({
            type: 'SEARCH_USERS',
            allusers: []
          })
        }
      })
    } else {
      db.on('value', function(snapshot) {
        let getusers = []
        snapshot.forEach(function(anakSnap) {
          const dedekKey = anakSnap.key
          const dedekSnap = anakSnap.val()
          dedekSnap.key = dedekKey
          getusers.push(dedekSnap)
        })
        dispatch({
          type: 'GET_USERS',
          allusers: getusers
        })
      })
    }
  }
}