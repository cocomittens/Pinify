import { connect } from 'react-redux';
import { updateUser } from '../actions/session_actions';
import EditProfile from './edit_profile';

const msp = state => {
    let user = Object.values(state.entities.users)[0];
    
    return ({
        errors: state.errors,
        user_info: {
            id: user.id,
            username: user.username,
            email: user.email,
            first_name: "",
            last_name: ""
        }
    })
}

const mdp = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(msp, mdp)(EditProfile)
