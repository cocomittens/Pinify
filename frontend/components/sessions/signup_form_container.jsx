import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
	return {
		errors: state.errors.sessionErrors,
		formType: 'Sign up',
		path: ownProps.location.pathname,
	};
};

const mdp = dispatch => {
	return {
		processForm: user => dispatch(signup(user)),
		clearErrors: () => dispatch(clearErrors()),
	};
};

const SignupFormContainer = connect(
	msp,
	mdp
)(SessionForm);
export default SignupFormContainer;
