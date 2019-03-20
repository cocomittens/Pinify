import { connect } from 'react-redux';
import Follows from './follows';
import { fetchUser } from '../../actions/session_actions';
import { fetchPinsNoReplace } from '../../actions/board_pin_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
	return {
		currentUser: state.session,
		user: state.entities.users,
		pins: state.entities.pins,
		boards: state.entities.boards,
	};
};

const mdp = dispatch => {
	return {
		fetchUser: username => dispatch(fetchUser(username)),
		fetchPinsNoReplace: boardId => dispatch(fetchPinsNoReplace(boardId)),
	};
};

const FollowsContainer = withRouter(
	connect(
		msp,
		mdp
	)(Follows)
);
export default FollowsContainer;
