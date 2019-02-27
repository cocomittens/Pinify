import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';

const msp = state => {
    return {
        errors: state.errors,
        formType: 'Sign Up',
    }
}

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SessionForm);