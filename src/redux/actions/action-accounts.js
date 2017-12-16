import {db} from '../firebase';

export const fetchAccounts = () => {
  return (dispatch,getState) => {
    let accounts = [];
    db.ref(getState().reducerAccounts.loggedin).once('value',(response) => {
      response.forEach(account => {
        const newAccount = {...account.val(),id:account.key}
        accounts.push(newAccount);
      });
      dispatch({
        type : 'SET_ACCOUNT_LIST',
        accounts
      });
    });
  }
}

export const addNewAccount = (account) => {
  return (dispatch,getState) => {
    const unique = db.ref().push().key;
    db.ref(`${getState().reducerAccounts.loggedin}/${unique}`).set(account);
    account.id = unique;
    dispatch({
      type : 'ADD_ACCOUNT',
      account
    });
  }
}

export const deleteAccountFirebase = (targetId) => {
  return (dispatch,getState) => {
    const newAccounts = getState().reducerAccounts.accounts.filter(account => {
      return account.id !== targetId
    });
    db.ref(`${getState().reducerAccounts.loggedin}/${targetId}`).remove().then(() => {
      dispatch({
        type : 'DELETE_ACCOUNT',
        newAccounts
      });
    }).catch((err) => {
      console.log(err);
    });
  }
}
