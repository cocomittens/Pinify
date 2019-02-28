import { RECEIVE_BP_ERRORS } from '../actions/board_pin_actions';

const boardPinErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BP_ERRORS:
            return Object.values(action.errors.responseJSON);
        default:
            return state;
    }
}

export default boardPinErrorsReducer;