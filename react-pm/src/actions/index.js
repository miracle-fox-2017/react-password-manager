export const ADD_DATA = 'ADD_DATA'
export const GET_ALL_DATA = 'GET_ALL_DATA'

export function getAllData () {
  return {
    type: GET_ALL_DATA,
    payload: 'Ahmad Nizar'
  }
}

export function addData (payload) {
  return {
    type: ADD_DATA,
    payload: payload
  }
}
