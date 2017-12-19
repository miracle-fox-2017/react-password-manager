import firebase from 'firebase'

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
  console.log('HASIL SEARCHING', data);
  return {
    type: 'GET_USER_ONE',
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


export const getUserAPI = (dispatch) => {
    return (dispatch) => {
      return firebase.database().ref().child('reactpwdmngr/user').on('value', snapshot => {
        let obj = []
        for (var idx in snapshot.val()) {
          obj.push({
            id: idx,
            url: snapshot.val()[idx].url,
            username: snapshot.val()[idx].username,
            password: snapshot.val()[idx].password,
            createdAt: snapshot.val()[idx].createdAt,
            updatedAt: snapshot.val()[idx].updatedAt
          })
        }
        dispatch(get_user_all(obj))
    })
  }
}

export const getUserByWord = (word) => {
    return (dispatch) => {
      return firebase.database().ref('reactpwdmngr').child('user').orderByChild('username').equalTo(`${word}`).on('value', snapshot => {
        let obj = []
        for (var idx in snapshot.val()) {
          obj.push({
            id: idx,
            url: snapshot.val()[idx].url,
            username: snapshot.val()[idx].username,
            password: snapshot.val()[idx].password,
            createdAt: snapshot.val()[idx].createdAt,
            updatedAt: snapshot.val()[idx].updatedAt
          })
        }
        dispatch(get_user_all(obj))
      })
    }
}


export const postUser = (form) => {
  return (dispatch) => {
    return firebase.database().ref('reactpwdmngr/user').push(form)
  }
}

export const delete_user = (id) => {
  return (dispatch) => {
    return firebase.database().ref('reactpwdmngr/user/' + id).remove();
  };
};
