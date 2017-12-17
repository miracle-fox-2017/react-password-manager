import db from '../firebase/firebase'

let dbRef = db.ref()
export const getNewDataProfile = (newData) => {
  console.log(newData)
}
export const inputNewDataProfile = (newData) => {
  return (dispatch) => {
    dbRef.push({
      url: newData.url,
      username: newData.username,
      password: newData.password,
      createdAt: newData.createdAt,
      updatedAt: newData.updatedAt
    })
  }
}