import React from 'react';
import { connect } from 'react-redux';
import Pin from './pin';
import { createPin } from '../../actions/board_pin_actions';

const msp = state => {
    return {
        pin: {title: "", link_url: "", author_id: 5}
    }
}

const mdp = dispatch => {
    return {
        action: pin => dispatch(createPin(pin))
    }
}

const PinContainer = connect(msp, mdp)(Pin);
export default PinContainer;