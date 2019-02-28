import { RECEIVE_BOARD, RECEIVE_BOARDS } from '../actions/board_pin_actions';
import { merge } from 'lodash';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:
            return merge({}, state, action.board)
        default:
            return state;
    }
};

export default boardsReducer;
