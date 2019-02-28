import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';
import EditProfile from './edit_profile';

const msp = state => {
    let user = Object.values(state.entities.users)[0];
    
    return ({
        errors: state.errors,
        user_info: user
    })
}

const mdp = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

const EditProfileContainer = connect(msp, mdp)(EditProfile);
export default EditProfileContainer;