import axios from 'axios'
import localPhoneStorage from 'react-native-simple-store'

//CONSTANTS
const RECEIVE_JOURNAL_ENTRY = 'RECEIVE_JOURNAL_ENTRY'
const LOAD_ALL_DREAMS = 'LOAD_ALL_DREAMS'
const LOAD_PUBLIC_DREAMS = 'LOAD_PUBLIC_DREAMS'
const RECEIVE_DREAM = 'RECEIVE_DREAM'


const initialState = {
  list: [],
  selectedDream: {},
  publicDreams: []
}

//REDUCER
const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state)
  switch(action.type) {

  case RECEIVE_JOURNAL_ENTRY:
    return action.dream

  case LOAD_ALL_DREAMS:
    newState.list = action.dreams
    return newState

  case LOAD_PUBLIC_DREAMS:
    newState.publicDreams = action.dreams
    return newState

  case RECEIVE_DREAM:
    newState.list = [...newState.list, action.dream]
    return newState
  }
  return state
}



//ACTION CREATORS
export const receiveDream = (dream) => ({
  type: RECEIVE_DREAM, dream
})


export const receiveJournalEntry = (state) =>
  dispatch => {
    const { title, content, timeStart, timeEnd, dreamType, isPublic, date, user_id } = state
    const sleepStartHour = +timeStart.slice(0,2)
    const sleepStartMinute = +timeStart.slice(3)
    const sleepEndHour = +timeEnd.slice(0,2)
    const sleepEndMinute = +timeEnd.slice(3)
    axios.post(`http://localhost:1337/api/dreams/user/${user_id}`, {title, content, sleepStartHour, sleepStartMinute, sleepEndHour, sleepEndMinute, dreamType, isPublic, date, user_id})
    .then(res => res.data)
    .then(dream => dispatch(receiveDream(dream)))
  }

export const loadAllDreams = dreams => {
	return {
		type: LOAD_ALL_DREAMS,
		dreams
	};
};

export const loadPublicDreams = dreams => {
	return {
		type: LOAD_PUBLIC_DREAMS,
		dreams
	};
};

export const receiveAllDreams = (userId,token) =>
	dispatch => {
		axios.get(`http://localhost:1337/api/dreams/user/${userId}?token=${token}`)
			.then((res) => {
        dispatch(loadAllDreams(res.data))
      })
      .catch(console.error);
    }

export const receivePublicDreams = () =>
	dispatch => {
		axios.get(`http://localhost:1337/api/dreams/public`)
			.then((res) => {
        dispatch(loadPublicDreams(res.data))
      })
      .catch(console.error);
    }


export default reducer
