import Splash from './splash'
import { connect } from 'react-redux';
import { fetchPins, fetchBoards } from '../../actions/board_pin_actions';

const msp = state => {
    debugger
    return {
        userId: Object.values(state.entities.users)[0].id,
        pins: Object.values(state.entities.pins)
    }
}

const mdp = dispatch => {
    return {
        fetchPins: id => dispatch(fetchPins(id)),
        fetchBoards: userId => dispatch(fetchBoards(userId))
    }
}

const splash = connect(msp, mdp)(Splash);
export default splash;
