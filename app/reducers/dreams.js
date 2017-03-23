import axios from 'axios'
import localPhoneStorage from 'react-native-simple-store'

//CONSTANTS
const RECEIVE_JOURNAL_ENTRY = 'RECEIVE_JOURNAL_ENTRY'
const LOAD_ALL_DREAMS = 'LOAD_ALL_DREAMS'

//REDUCER
const reducer = (state=null, action) => {
  switch(action.type) {

  case RECEIVE_JOURNAL_ENTRY:
    return action.user

  case LOAD_ALL_DREAMS:
    return action.user

  }
  return state
}



//ACTION CREATORS
export const receiveJournalEntry = (state) =>
  dispatch => {
    const { title, content, timeStart, timeEnd, dreamType, isPublic, date } = state
    const sleepStartHour = +timeStart.slice(0,2)
    const sleepStartMinute = +timeStart.slice(3)
    const sleepEndHour = +timeEnd.slice(0,2)
    const sleepEndMinute = +timeEnd.slice(3)
    axios.post('http://localhost:1337/api/dreams', {title, content, sleepStartHour, sleepStartMinute, sleepEndHour, sleepEndMinute, dreamType, isPublic, date})
      // .then(() => dispatch(whoami()))
      // .catch(() => dispatch(whoami()))
  }

export const loadAllDreams = dreams => {
	return {
		type: LOAD_ALL_DREAMS,
		dreams
	};
};

export const receiveAllDreams = () => {
	dispatch => {
		axios.get('http://localhost:1337/api/dreams')
			.then((dreams) => {
        dispatch(loadAllDreams(dreams))
      }) 
      .catch(console.error);
	}
}

export default reducer
