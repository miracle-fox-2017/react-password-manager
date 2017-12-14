import axios from 'axios'
import * as firebase from 'firebase'

export const get_user_all = (form) => {
  return {
    type: 'GET_USER'
    payload: {
      form
    }
  }
}

export const get_user_one = (form) => {
  return {
    type: 'GET_USER_ONE'
    payload: {
      form
    }
  }
}

export const create_user = (form) => {
  return {
    type: 'ADD_USER'
    payload: {
      form
    }
  }
}

export const delete_user = (form) => {
  return {
    type: 'DELETE_USER'
    payload: {
      form
    }
  }
}


export const edit_user = (form) => {
  return {
    type: 'EDIT_USER'
    payload: {
      form
    }
  }
}


export const Server = () => {

}
