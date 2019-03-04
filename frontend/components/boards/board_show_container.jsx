import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchPins } from '../../actions/board_pin_actions';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    return { 
        boardId: ownProps.match.params.boardId,
        pins: Object.values(state.entities.pins)
    }
}

const mdp = dispatch => {
    return { fetchPins: boardId => dispatch(fetchPins(boardId)) }
}

const BoardShowContainer = withRouter(connect(msp, mdp)(BoardShow));
export default BoardShowContainer