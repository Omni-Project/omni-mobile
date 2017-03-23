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
    localPhoneStorage.get('token')
      .then(token => {
        console.log('token is', token)
        //if no token is saved
        if(!token) {
          dispatch(setUser(null))
        } else {
        //otherwise check validity of token
        return axios.get(`http://localhost:1337/api/auth/verify?token=${token}`)
          .then(res => {
            console.log('result of call', res.data)
            const data = res.data
            if(!data.success) //PUSH TO LOGIN SCREEN
            dispatch(setUser(data.user))
          })
        }
      })
      .catch(console.error)

export const login = (username, password) =>
  dispatch =>
  //hard coding to local host for now, will switch to heroku url
    axios.post('http://localhost:1337/api/auth/login/mobile',
      {username, password})
      .then(res => res.data)
      .then(token => {
        //token being saved
        return localPhoneStorage.save('token', token)
       })
      .then(() => dispatch(getUser()))
      .catch(console.error)

export const logout = () =>
  dispatch =>
    localPhoneStorage.delete('user')
      .then(() => dispatch(removeUser()))

export default reducer
