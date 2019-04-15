import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin } from '../../actions/board_pin_actions';
import { fetchUser } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
	return {
		pinId: ownProps.match.params.pinId,
		pin: Object.values(state.entities.pins)[0],
		user: Object.values(state.entities.users),
		boards: state.entities.users.boards,
	};
};

const mdp = dispatch => {
	return { fetchPin: pinId => dispatch(fetchPin(pinId)), fetchUser: username => dispatch(fetchUser(username)) };
};

const PinShowContainer = withRouter(
	connect(
		msp,
		mdp
	)(PinShow)
);
export default PinShowContainer;
