import React from 'react';
import { connect } from 'react-redux';
import PinForm from './pin_form';
import { createPin } from '../../actions/board_pin_actions';

const msp = state => {
    return {
        pin: {title: "", link_url: "", author_id: 5, image_url: "default-profile-pic.png"},
        formType: 'Create Pin'
    }
}

const mdp = dispatch => {
    return {
        action: pin => dispatch(createPin(pin))
    }
}

const CreatePinContainer = connect(msp, mdp)(PinForm);
export default CreatePinContainer;