import { combineReducers } from 'redux';
import sessionErrorsReducer from './users_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer
});

export default errorsReducer;