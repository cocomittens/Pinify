import { RECEIVE_PIN, RECEIVE_PINS } from '../actions/board_pin_actions';
import { merge } from 'lodash';

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PINS:
            return action.pins;
        case RECEIVE_PIN:
            return action.pin;
        default:
            return state;
    }
};

export default pinsReducer;
