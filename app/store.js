import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {getUser} from './reducers/auth'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      thunkMiddleware
    )
  )
)

export default store

// check local store for user right away
store.dispatch(getUser())
