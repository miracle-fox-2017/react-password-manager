import database from '../firebase'
export const ADD_DATA = 'ADD_DATA'
export const GET_ALL_DATA = 'GET_ALL_DATA'

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
