import Splash from './splash';
import { connect } from 'react-redux';
import { fetchPins, fetchBoards, createPinsBoard } from '../../actions/board_pin_actions';

const msp = state => {
	return {
		userId: state.session.id,
		username: state.session.username,
		pins: Object.values(state.entities.pins),
		boards: Object.values(state.entities.boards),
	};
};

const mdp = dispatch => {
	return {
		fetchPins: id => dispatch(fetchPins(id)),
		fetchBoards: userId => dispatch(fetchBoards(userId)),
		createPinsBoard: pb => dispatch(createPinsBoard(pb)),
	};
};

const splash = connect(
	msp,
	mdp
)(Splash);
export default splash;
