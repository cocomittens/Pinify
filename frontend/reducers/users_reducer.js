import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser;
        case RECEIVE_USER:
          return action.user;
        default:
            return state;
    }
};

export default usersReducer;