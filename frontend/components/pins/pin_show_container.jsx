import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin } from '../../actions/board_pin_actions';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    return {
        pinId: ownProps.match.params.pinId,
        pin: Object.values(state.entities.pins)[0]
    }
}

const mdp = dispatch => {
    return { fetchPin: pinId => dispatch(fetchPin(pinId)) }
}

const PinShowContainer = withRouter(connect(msp, mdp)(PinShow));
export default PinShowContainer