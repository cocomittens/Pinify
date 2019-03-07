import { RECEIVE_PIN, RECEIVE_PINS, REMOVE_PIN, RECEIVE_PINS_NO_REPLACE } from '../actions/board_pin_actions';
import { merge } from 'lodash';

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PINS:
            return action.pins;
        case RECEIVE_PINS_NO_REPLACE:
        
            return merge({}, state, action.pins);
        case RECEIVE_PIN:
            return merge({}, state, action.pin);
        case REMOVE_PIN:
            let newState = merge({}, state);
            delete newState[action.pinId];
            return newState;
        default:
            return state;
    }
};

export default pinsReducer;