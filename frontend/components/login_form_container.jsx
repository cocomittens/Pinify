import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'Log in',
        path: ownProps.location.pathname
    }
}

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default withRouter(connect(msp, mdp)(SessionForm));