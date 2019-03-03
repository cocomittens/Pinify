import React from 'react';
import { connect } from 'react-redux';
import PinForm from './pin_form';
import { createPin, createPinBoard, fetchPins } from '../../actions/board_pin_actions';

const msp = state => {
    let userId = Object.values(state.entities.users)[0].id;
    
    return {
        pin: {title: "", link_url: "", author_id: userId, board_id: 2, photoFile: null, photoUrl: null},
        formType: 'Create Pin',
    }
}

const mdp = dispatch => {
    return {
        action: pin => dispatch(createPin(pin)),
    }
}

const CreatePinContainer = connect(msp, mdp)(PinForm);
export default CreatePinContainer;