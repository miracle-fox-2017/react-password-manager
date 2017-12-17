import axios from 'axios' 

const actionManager = (accounts) => {
  return {
    type: 'ACCOUNTS',
    payload: accounts
  }
}

export const postAccount = (account) => {
  return dispatch => {
    // console.log(payload)
    axios.post('http://localhost:3003/accounts', account)
    .then(({ data }) => {
       dispatch(actionManager(data))
    })
    .catch(err => { 
      console.log(err)
    })
  }
}

export const getAccounts = () => {
  console.log('-==========masuk action')
  return dispatch => {
    axios.get('http://localhost:3003/accounts')
    .then(({ data }) => {
      console.log('axios', data)
      dispatch(actionManager(data))
    })
  }
}