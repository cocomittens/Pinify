import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, clearErrors } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.sessionErrors,
        formType: 'Log in',
        path: ownProps.location.pathname
    }
}

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default withRouter(connect(msp, mdp)(SessionForm));