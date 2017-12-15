import {passManager} from '../firebase'
import axios from 'axios'


export const getpasswordlist = (passwordlist) => {
  return {
    type: 'GET_PASSWORD_LIST',
    payload: {
      passwordlist
    }
  }
}

export function fetchallpassword(dispatch) {
  return dispatch => {
    passManager.on('value', snapshot => {
      dispatch(getpasswordlist(snapshot.val()))
    })
  }
}

export function savepassword(newpass) {
  newpass.createdat = Date.now()
  newpass.updatedat = Date.now()
  return dispatch => {
    passManager.push({
      URL: newpass.URL,
      username: newpass.username,
      password: newpass.password,
      createdat: newpass.createdat,
      updatedat: newpass.updatedat
    })
  }
}

export function deletepassword(key) {
  return dispatch => {
    passManager.child(key).remove()
  }
}
