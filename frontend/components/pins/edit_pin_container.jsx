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
        deletePin: pinId => dispatch(deletePin(pinId)),
        updatePin: pin => dispatch(updatePin(pin))
    }
}

class EditPinForm extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
        this.props.fetchBoards(this.props.userId);
        this.handleDelete = this.handleDelete.bind(this);
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {title: "", description: "", link_url: ""}
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePin(this.state);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }

    updateDescription(e) {
        this.setState({ description: e.target.value })
    }

    updateLink(e) {
        this.setState({ link_url: e.target.value })
    }

    handleDelete() {
        this.props.deletePin(this.props.pin.id);
    }

    render() {
        let photo = null, pinId = null;
        if (this.props.pin) {
            photo = (<div className="editPinImgContainer"><img class="pinShowPhoto" src={this.props.pin.photoUrl} /></div>);
            pinId = this.props.pin.id;
        } 
 
        return (
            <div id="editPinForm">
                <GreetingContainer />
                <div className="boardForm">
                    <div className="containerContainer">
                        <div className="formContainer">
                            {this.state.errors}
                            <div className="headingsContainer">
                                <h1>Edit this pin</h1>
                            </div>
                            {/* <ul className="sessionErrors">{this.props.errors.map((error, idx) => {
                            return (<li key={idx}>{error}</li>)
                        })}</ul> */}
                            <form onSubmit={this.handleSubmit}>
                               <div class="editPinContent">
                                <div class="leftEditPinForm">
                                        <label><span>Title</span>
                                        <input
                                                type="text"
                                            ></input>
                                        </label>
                                        <label>
                                            <div className="descriptionWrapper"><span>Description</span>
                                                <textarea
                                                    value={this.state.updateDescription}
                                                    onChange={this.updateDescription.bind(this)}
                                                    placeholder="Tell us about this pin..."
                                                />
                                            </div>
                                        </label>
                                        <label><span>Website</span>
                                        <input
                                                type="text"
                                            ></input>
                                        </label>
                                    </div>
                                    {photo}
                                </div>
                                <div className="buttonsContainer">
                                    <Link to="/"><button onClick={this.handleDelete}>Delete</button></Link>
                                    <div className="rightEditBtns">
                                        <Link to={`pin/${pinId}`}><button>Cancel</button></Link>
                                        <button type="submit" onClick={this.handleSubmit}>Save</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

const EditPinContainer = withRouter(connect(msp, mdp)(EditPinForm));
export default EditPinContainer;