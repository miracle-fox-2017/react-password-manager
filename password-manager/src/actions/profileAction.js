import db from '../firebase/firebase'

let dbRef = db.ref()

export const getDataProfile = (dataProfile) => {
  let payload = dataProfile
  return {
    type: 'get_data',
    payload
  }
}
export const fetchDataProfile = () => {
  let profile = []
  return (dispatch) => {
    dbRef.on('value', function (snapshot) {
      snapshot.forEach((dataProfile) => {
        let newProfile = dataProfile.val()
        newProfile.key = dataProfile.key
        profile.push(newProfile)
      })
      dispatch(getDataProfile(profile))
    });
  }
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

export const deleteDataProfile = (keyProfile) => {
  return (dispatch) => {
    dbRef.child(keyProfile).remove()
    dispatch(fetchDataProfile())
  }
}