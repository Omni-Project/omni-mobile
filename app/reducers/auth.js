import axios from 'axios'
import localPhoneStorage from 'react-native-simple-store'

//CONSTANTS
const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

//REDUCER
const reducer = (state=null, action) => {
  switch(action.type) {

  case SET_USER:
    return action.user

  case REMOVE_USER:
    return null

  }
  return state
}

//ACTION CREATORS
export const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER
  }
}

export const getUser = () =>
  dispatch =>
    localPhoneStorage.get('user')
      .then(user => dispatch(setUser(user)))

export const login = (username, password) =>
  dispatch =>
  //hard coding to local host for now, will switch to heroku url
    axios.post('http://localhost:1337/api/auth/login/local',
      {username, password})
      .then(() => axios.get('http://localhost:1337/api/auth/whoami'))
      .then(res => res.data)
      .then(user => {
        const savedUser = {
          name: user.name,
          email: user.email,
          id: user.id,
          photoUrl: user.photoUrl,
          sleepDebt: user.sleepDebt,
          averageSleep: user.averageSleep
        }
        return localPhoneStorage.save('user', savedUser)
       })
      .then(() => dispatch(getUser()))
      .catch(console.error)

export const logout = () =>
  dispatch =>
    localPhoneStorage.delete('user')
      .then(() => dispatch(removeUser()))

export default reducer
