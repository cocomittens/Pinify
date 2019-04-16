import { RECEIVE_CURRENT_USER, RECEIVE_USER, CLEAR_USERS } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser;
        case RECEIVE_USER:
            return merge({}, state, {
                [action.user.id]: action.user
            });
        case CLEAR_USERS:
            return {};
        default:
            return state;
    }
};

export default usersReducer;