import { RECEIVE_PIN_BOARDS } from '../actions/board_pin_actions';
import { merge } from 'lodash';

const pinsBoardReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PIN_BOARDS:
            return action.pbs;
        default:
            return state;
    }
};

export default pinsBoardReducer;
