import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from '../actions/board_pin_actions';
import { merge } from 'lodash';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:
            return merge({}, state, action.board);
        case REMOVE_BOARD:
            let newState = merge({}, state);
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
};

export default boardsReducer;
