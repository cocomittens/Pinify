import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.user_info;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.updateUser(user);
    }

    updateUsername(e) {
        this.setState({ username: e.target.value })
    }

    updateFirstname(e) {
        this.setState({ first_name: e.target.value })
    }

    updateLastname(e) {
        this.setState({ last_name: e.target.value })
    }

    render() {
        
        return (
            <div id="editProfileContainer">
            <GreetingContainer />
            <div className="containerContainer">
                
                <div className="formContainer">
                    <div className="headingsContainer">
                    <div id="headings">
                        <h1>Edit profile</h1>
                        <h2>People on Pinify will get to know you with the info below</h2>

                    </div>
                        <div className="buttonsContainer">
                            <button id="doneBtn" onClick={this.handleSubmit}>Done</button>
                        </div>
                    </div>
                    
                    <form id="editForm">
                    <label>First name<br></br>
                        <input
                            value={this.state.first_name}
                            type="text"
                            onChange={this.updateFirstname.bind(this)}
                            placeholder="Ex. Jane"
                                /></label>
                            <label>Last name<br></br>
                        <input
                            value={this.state.last_name}
                            type="text"
                            onChange={this.updateLastname.bind(this)}
                            placeholder="Ex. Smith"
                                /></label>
                            <label id="editUsername">Username<br></br>
                            www.pinify-app.herokuapp.com/
                                <input
                                    value={this.state.username}
                                    type="text"
                                    onChange={this.updateUsername.bind(this)}
                                
                                /></label>
                            
                            <label>About your profile<br></br>
                                <textarea

                                    placeholder="Write a little about yourself here"
                                /></label>
                            <label id="editLocation">Location<br></br>
                                <input
                                type="text"
                                placeholder ="E.g. San Francisco, CA"
                                /></label>
                    </form>
                </div>

            </div>
                <Link to="/pin/new"><div className="addPinBtnContainer"><button className="addPinBtn"><span>+</span></button></div></Link>
            </div>
        )
    }
}

export default EditProfile;