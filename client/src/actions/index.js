import axios from 'axios'
import firebase from 'firebase'
import { config } from '../config'


export const get_user_all = (data) => {
  console.log('INI DATA DI ACTION', data);
  return {
    type: 'GET_USER',
    payload: {
      data
    }
  }
}

export const get_user_one = (data) => {
  return {
    type: 'GET_USER_ONE',
    payload: {
      data
    }
  }
}

export const delete_user = (data) => {
  return {
    type: 'DELETE_USER',
    payload: {
      data
    }
  }
}


export const edit_user = (data) => {
  return {
    type: 'EDIT_USER',
    payload: {
      data
    }
  }
}


export const getUserAPI = (getuser) => {
  return (dispatch) => {
    return firebase.database().ref().child('reactpwdmngr/user').on('value', snapshot => {
      let data = []
        for(var idx in snapshot.val()) {
          data.push({
            id: idx,
            url:  snapshot.val().url,
            username: snapshot.val().username,
            password: snapshot.val().password,
            createdAt: snapshot.val().createdAt,
            updatedAt: snapshot.val().updatedAt
          })
        }
        dispatch(get_user_all(data))
    })
  }
}

export const postUser = (form) => {
  return (dispatch) => {
    return firebase.database().ref('reactpwdmngr/user').push(form)
  }
}
