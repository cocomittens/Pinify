import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (state = { errors: null }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, { errors: action.errors });
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { errors: null })
        default:
            return state;
    }
};

export default sessionErrorsReducer;