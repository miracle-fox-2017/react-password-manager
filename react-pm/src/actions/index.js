import database from '../firebase'
export const ADD_DATA = 'ADD_DATA'
export const GET_ALL_DATA = 'GET_ALL_DATA'
export const DELETE_DATA = 'DELETE_DATA'
export const SEARCH_DATA = 'SEARCH_DATA'
export const SET_UPDATE = 'SET_UPDATE'
export const UPDATE_DATA = 'UPDATE_DATA'

export function getAllData (usersData) {
  return {
    type: GET_ALL_DATA,
    payload: usersData
  }
}

export function watchUsersData(dispatch) {
  database.ref('/usersdata').on('value', (snap) => {
    dispatch(getAllData(snap.val()))
  })
}

export function addData (payload) {
  return dispatch => {
    const dbDir = database.ref('/usersdata')
    dbDir.push(payload)
    .then(() => {
      dispatch({
        type: ADD_DATA,
        payload: payload
      })
    })
    .catch(error => console.error(error))
  }
}

export function deleteData (payload) {
  return dispatch => {
    const dbDir = database.ref(`/usersdata/${payload}`)
    dbDir.remove()
    .then(() => {
      dispatch({
        type: DELETE_DATA,
        payload
      })
    })
    .catch(error => console.error(error))
  }
}

export function searchData (payload) {
  if (payload === null || payload === ''){
    return dispatch => {
      database.ref('/usersdata').on('value', (snap) => {
        dispatch(getAllData(snap.val()))
      })
    }
  } else {
    return dispatch => {
      const dbDir = database.ref('usersdata')
      dbDir.orderByChild('username').equalTo(payload).on('value', function(snapshot) {
        dispatch({
          type: SEARCH_DATA,
          payload: snapshot.val()
        })
      })
    }
  }
}
export function setUpdate (payload) {
  return dispatch => {
    database.ref(`/usersdata/${payload}`).once('value')
    .then((snapshot) => {
      dispatch({
        type: SET_UPDATE,
        payload: snapshot.val()
      })
    })
    .catch(error => console.error(error))
  }
}
export function updateData (payload) {
  return dispatch => {
    database.ref(`/usersdata/${payload.key}`).set({
      url: payload.userData.url,
      username: payload.userData.username,
      password: payload.userData.password
    })
    .then(() => {
      dispatch({
        type: UPDATE_DATA,
        payload
      })
    })
  }
}
