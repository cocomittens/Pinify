import { connect } from 'react-redux';
import { fetchBoards, fetchPins, fetchPin } from '../../actions/board_pin_actions';
import UserProfile from './user_profile';

const msp = (state, ownProps) => {
    let user = Object.values(state.entities.users)[0];

    return ({
        errors: state.errors,
        username: ownProps.match.params.username,
        user,
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        boards: Object.values(state.entities.boards),
        pins: state.entities.pins
    })
}

const mdp = dispatch => {
    return {
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        fetchPins: (boardId) => dispatch(fetchPins(boardId)),
        fetchPin: (pinId) => dispatch(fetchPin(pinId))
    }
}

const UserProfileContainer = connect(msp, mdp)(UserProfile);
export default UserProfileContainer;