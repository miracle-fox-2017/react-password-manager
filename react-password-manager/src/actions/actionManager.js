import axios from 'axios' 
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBF009mA5QjlkshaY0xuK_wQPZg1OTKOtk",
  authDomain: "password-manager-12abb.firebaseapp.com",
  databaseURL: "https://password-manager-12abb.firebaseio.com",
  projectId: "password-manager-12abb",
  storageBucket: "password-manager-12abb.appspot.com",
  messagingSenderId: "237083498918"
}
let db = firebase.initializeApp(config)

const actionManager = (accounts) => {
  return {
    type: 'ACCOUNTS',
    payload: accounts
  }
}



export const postAccount = (account) => {
  return (dispatch, getState) => {
    // axios.post('http://localhost:3003/accounts', account, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    firebase.database().ref().child('accounts').push({
      url: account.url,
      username: account.username,
      password: account.password,
      createdAt: account.createdAt.toString(),
      updatedAt: account.updatedAt 
    })

    alert('insert data')
  }
}



export const getAccounts = () => {
  return dispatch => {
    // axios.get('http://localhost:3003/accounts')
    // .then(({ data }) => {
    //   dispatch(actionManager(data))
    // })
    
    firebase.database().ref().child('accounts').on('value', snap => {
      var list = []
      snap.forEach((child) => {
        var item = child.val()
        item.key = child.key
        list.push(item)
      })
      dispatch(actionManager(list))
    })
  }
}



export const deleteAccount = (id) => {
  return dispatch => {
    // axios.delete(`http://localhost:3003/accounts/${id}`)
    // .then(({ data }) => {
    //    dispatch(getAccounts())
    //    alert('Deleted')
    // })
    firebase.database().ref(`/accounts/${id}`).remove()
    alert('data has been deleted')
  }
}



export const editAccount = (id, account) => {
  return dispatch => {
    // axios.put(`http://localhost:3003/accounts/${id}`, account, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(({data}) =>{
    //   dispatch(getAccounts())
    // })
    firebase.database().ref(`/accounts/${id}`).set(account)
  }
}