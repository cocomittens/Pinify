import { merge } from 'lodash';

const pinsBoardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};

export default pinsBoardsReducer;
