import Splash from './splash'
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/board_pin_actions';

const msp = state => {
    return {
        pins: Object.values(state.entities.pins)
    }
}

const mdp = dispatch => {
    return {
        fetchPins: boardId => dispatch(fetchPins(boardId))
    }
}

const splash = connect(msp, mdp)(Splash);
export default splash;