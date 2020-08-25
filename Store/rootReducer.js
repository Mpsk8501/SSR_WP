import { combineReducers } from 'redux'
import vacationReducer from './reducers/vacationReducer'


export default combineReducers({
  vacations: vacationReducer
})
