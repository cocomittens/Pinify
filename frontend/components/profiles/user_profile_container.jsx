import { connect } from 'react-redux';
import { fetchBoards, fetchBoard, fetchPinsNoReplace, fetchPins } from '../../actions/board_pin_actions';
import { fetchUser, addFollow } from '../../actions/session_actions';
import UserProfile from './user_profile';

const msp = (state, ownProps) => {
	return {
		errors: state.errors,
		username: ownProps.match.params.username,
		user: state.entities.users,
		boards: Object.values(state.entities.boards),
		pins: state.entities.pins,
		currentUserId: state.session.id,
		currentUserName: state.session.username,
	};
};

const mdp = dispatch => {
	return {
		fetchBoards: userId => dispatch(fetchBoards(userId)),
		fetchBoard: boardId => dispatch(fetchBoard(boardId)),
		fetchPinsNoReplace: boardId => dispatch(fetchPinsNoReplace(boardId)),
		fetchPins: boardId => dispatch(fetchPins(boardId)),
		fetchUser: username => dispatch(fetchUser(username)),
		addFollow: follow => dispatch(addFollow(follow)),
	};
};

const UserProfileContainer = connect(
	msp,
	mdp
)(UserProfile);
export default UserProfileContainer;
