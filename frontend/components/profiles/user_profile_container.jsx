import { connect } from 'react-redux';
import { fetchBoards, fetchPins } from '../../actions/board_pin_actions';
import UserProfile from './user_profile';

const msp = (state, ownProps) => {
    let user = Object.values(state.entities.users)[0];

    return ({
        errors: state.errors,
        username: ownProps.match.params.username,
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        boards: Object.values(state.entities.boards)
    })
}

const mdp = dispatch => {
    return {
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        fetchPins: (boardId) => dispatch(fetchPins(boardId))
    }
}

const UserProfileContainer = connect(msp, mdp)(UserProfile);
export default UserProfileContainer;