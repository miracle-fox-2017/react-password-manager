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

export const searchpassword = (search) => {
  return {
    type: 'SEARCH_PASSWORD',
    payload: {
      search
    }
  }
}

export function fetchallpassword() {
  return dispatch => {
    passManager.on('value', snapshot => {
      dispatch(getpasswordlist(snapshot.val()))
    })
  }
}

export function searchallpassword(cari) {
  console.log(cari)
  return dispatch => {
    passManager.orderByChild('URL').equalTo(cari).on('value', snapshot => {
      console.log('yuhu',snapshot.val());
      dispatch(searchpassword(cari))
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

export function updatepassword(newpass, key) {
  return dispatch => {
    passManager.child(key).update({
      URL: newpass.URL,
      username: newpass.username,
      password: newpass.password,
      updatedat: Date.now()
    })
  }
}
