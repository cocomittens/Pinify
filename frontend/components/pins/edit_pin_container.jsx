import React from 'react';
import { connect } from 'react-redux';
import PinForm from './pin_form';
import { updatePin, fetchPin } from '../../actions/board_pin_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownParams) => {
    return {
        pin: state.entities.pins[ownParams.match.params.pinId],
        formType: 'Edit Pin'
    }
}

const mdp = dispatch => {
    return {
        fetchPin: id => dispatch(fetchPin(id)),
        action: pin => dispatch(updatePin(pin))
    }
}

class EditPinForm extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    
    }

    render() {
        const { action, pin, formType } = this.props;
        return (
            <PinForm
                action={action}
                pin={pin}
                formType={formType} />
        );
    }
}

const EditPinContainer = withRouter(connect(msp, mdp)(EditPinForm));
export default EditPinContainer;