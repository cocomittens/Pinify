import React from 'react';
import { connect } from 'react-redux';
import GreetingContainer from '../header/greeting_container';
import { updatePin, fetchPin, fetchBoards, deletePin } from '../../actions/board_pin_actions';
import { withRouter, Link } from 'react-router-dom';

const msp = (state, ownParams) => {
    let userId = Object.values(state.entities.users)[0].id;
    return {
        pin: state.entities.pins[ownParams.match.params.pinId],
        formType: 'Edit Pin',
        boards: Object.values(state.entities.boards),
        userId
    }
}

const mdp = dispatch => {
    return {
        fetchPin: id => dispatch(fetchPin(id)),
        action: pin => dispatch(updatePin(pin)),
        fetchBoards: userId => dispatch(fetchBoards(userId)),
        deletePin: pinId => dispatch(deletePin(pinId)) 
    }
}

class EditPinForm extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
        this.props.fetchBoards(this.props.userId);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deletePin(this.props.pin.id);
        this.setState({ deleted: true })
    }

    render() {
        let photo = (this.props.pin) ? (<div className="editPinImgContainer"><img class="editPinImg" src={this.props.pin.photoUrl} /></div>) : null;
        return (
            <div>
                <GreetingContainer />
            
            <div className="editPinForm">
                
                <div className="editPinContent">
                {photo}
                        <div className="buttonsContainer"><Link to="/"><button onClick={this.handleDelete}>Delete</button></Link></div>
                </div>
            </div>
            </div>
        );
    }
}

const EditPinContainer = withRouter(connect(msp, mdp)(EditPinForm));
export default EditPinContainer;