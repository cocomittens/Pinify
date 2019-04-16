import { connect } from 'react-redux';
import Follows from './follows';
import { fetchUser, clearUsers } from '../../actions/session_actions';
import { fetchPin, fetchBoard, clearPins } from '../../actions/board_pin_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
	return {
		currentUser: state.session,
		users: Object.values(state.entities.users),
		pins: state.entities.pins,
		boards: state.entities.boards,
	};
};

const mdp = dispatch => {
	return {
		fetchUser: username => dispatch(fetchUser(username)),
		fetchPin: pinId => dispatch(fetchPin(pinId)),
		fetchBoard: boardId => dispatch(fetchBoard(boardId)),
		clearPins: () => dispatch(clearPins()),
		clearUsers: () => dispatch(clearUsers())
	};
};

const FollowsContainer = withRouter(
	connect(
		msp,
		mdp
	)(Follows)
);
export default FollowsContainer;
