import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import pinsReducer from './pins_reducer';
import boardsReducer from './boards_reducer';
import pinsBoardsReducer from './pins_boards_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    pins: pinsReducer,
    boards: boardsReducer,
    pinsBoards: pinsBoardsReducer
});

export default entitiesReducer;