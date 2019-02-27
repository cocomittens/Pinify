import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'Sign up',
        path: ownProps.location.pathname
    }
}

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SessionForm);