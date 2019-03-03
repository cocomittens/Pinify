import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_pin_actions';
import BoardForm from './board_form';

const msp = state => {
    return {
        userId: Object.values(state.entities.users)[0].id
    }
}

const mdp = dispatch => {
    return {
        createBoard: board => dispatch(createBoard(board))
    }
}

const CreateBoardContainer = connect(msp, mdp)(BoardForm);
export default CreateBoardContainer;