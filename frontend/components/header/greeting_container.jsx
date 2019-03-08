import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        currentUser: state.session,
        path: ownProps.location.pathname
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

const GreetingContainer = withRouter(connect(msp, mdp)(Greeting));
export default GreetingContainer;