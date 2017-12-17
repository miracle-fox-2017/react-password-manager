import axios from 'axios' 

const actionManager = (accounts) => {
  return {
    type: 'ACCOUNTS',
    payload: accounts
  }
}



export const postAccount = (account) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3003/accounts', account, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(({ data }) => {
      alert('Insert Success')
       dispatch(getAccounts())
    })
    .catch(err => { 
      console.log(err)
    })
  }
}



export const getAccounts = () => {
  return dispatch => {
    axios.get('http://localhost:3003/accounts')
    .then(({ data }) => {
      dispatch(actionManager(data))
    })
  }
}



export const deleteAccount = (id) => {
  return dispatch => {
    axios.delete(`http://localhost:3003/accounts/${id}`)
    .then(({ data }) => {
       dispatch(getAccounts())
       alert('Deleted')
    })
    .catch(err => { 
      console.log(err)
    })
  }
}



export const editAccount = (id, account) => {
  return dispatch => {
    axios.put(`http://localhost:3003/accounts/${id}`, account, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(({data}) =>{
      dispatch(getAccounts())
    })
  }
}