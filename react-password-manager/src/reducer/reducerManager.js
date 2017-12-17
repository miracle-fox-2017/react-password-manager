const initialState = {
  accounts: []
}
const reducerManager = (state = initialState  , action) =>{
 console.log('masuk reducer ---------1 ', state)
  if(action.type === 'ACCOUNTS'){
   console.log('masuk reducer', {...state, accounts: action.payload})
   return {...state, accounts: action.payload}
  }
  return state
}

export default reducerManager
