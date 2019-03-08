import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';
import EditProfile from './edit_profile';

const msp = state => {
    let user = state.session;
    
    return ({
        errors: state.errors,
        user_info: state.session
    })
}

const mdp = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

const EditProfileContainer = connect(msp, mdp)(EditProfile);
export default EditProfileContainer;