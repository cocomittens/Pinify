import { connect } from 'react-redux';
import { fetchBoards, fetchBoard, fetchPin, fetchPins, fetchPinsNoReplace, clearPins } from '../../actions/board_pin_actions';
import { fetchUser, clearUsers, addFollow, deleteFollow } from '../../actions/session_actions';
import UserProfile from './user_profile';

const msp = (state, ownProps) => {
	return {
		errors: state.errors,
		username: ownProps.match.params.username,
		user: Object.values(state.entities.users),
		users: state.entities.users,
		boards: Object.values(state.entities.boards),
		pins: state.entities.pins,
		currentUserId: state.session.id,
		currentUserName: state.session.username,
		followers: state.session.followers
	};
};

const mdp = dispatch => {
	return {
		fetchBoards: userId => dispatch(fetchBoards(userId)),
		fetchBoard: boardId => dispatch(fetchBoard(boardId)),
		fetchPin: pinId => dispatch(fetchPin(pinId)),
		fetchPins: boardId => dispatch(fetchPinsNoReplace(boardId)),
		fetchUser: username => dispatch(fetchUser(username)),
		clearUsers: () => dispatch(clearUsers()),
		addFollow: follow => dispatch(addFollow(follow)),
		removeFollow: id => dispatch(deleteFollow(id)),
		clearPins: () => dispatch(clearPins())
	};
};

const UserProfileContainer = connect(
	msp,
	mdp
)(UserProfile);
export default UserProfileContainer;
