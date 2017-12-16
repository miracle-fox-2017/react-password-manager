import axios from 'axios'
import * as firebase from 'firebase'

export const get_user_all = (form) => {
  return {
    type: 'GET_USER',
    payload: {
      form
    }
  }
}

export const get_user_one = (form) => {
  return {
    type: 'GET_USER_ONE',
    payload: {
      form
    }
  }
}

export const create_user = (form) => {
  return {
    type: 'ADD_USER',
    payload: {
      form
    }
  }
}

export const delete_user = (form) => {
  return {
    type: 'DELETE_USER',
    payload: {
      form
    }
  }
}


export const edit_user = (form) => {
  return {
    type: 'EDIT_USER',
    payload: {
      form
    }
  }
}


export const getUserAPI = () => {
  return (dispatch) => {
    return firebase.database().ref().child('reactpwdmngr/user').on('value', snapshot => {
      let data = []
        for(var idx in snapshot.val()) {
          data.push({
            id: snapshot.key,
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
