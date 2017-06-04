
import { combineReducers } from 'redux'
import questions from './questionReducer'

export default combineReducers({
    appData: questions
});
