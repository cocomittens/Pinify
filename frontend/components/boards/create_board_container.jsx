import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_pin_actions';
import BoardForm from './board_form';

const msp = state => {
	return {
		userId: Object.values(state.entities.users)[0].id,
		formType: 'Create',
		session: state.session,
	};
};

const mdp = dispatch => {
	return {
		action: board => dispatch(createBoard(board)),
	};
};

const CreateBoardContainer = connect(
	msp,
	mdp
)(BoardForm);
export default CreateBoardContainer;
