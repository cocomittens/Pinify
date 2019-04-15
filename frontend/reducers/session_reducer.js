import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = { id: null }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id,
            username: action.currentUser.username,
            first_name: action.currentUser.first_name,
            followed: action.currentUser.follows };
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, { id: null });
        default:
            return state;
    }
};

export default sessionReducer;