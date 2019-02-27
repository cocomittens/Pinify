import React from 'react';
import GreetingContainer from './greeting_container';

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

    updateFirstname(e) {
        this.setState({ first_name: e.target.value })
    }

    updateLastname(e) {
        this.setState({ last_name: e.target.value })
    }

    render() {
        
        return (
            <div>
            <GreetingContainer />
            <div className="containerContainer">
                
                <div className="formContainer">
                    <div className="headingsContainer">
                        <h1>Edit Profile</h1>
                        <h2>People on Pinterest will get to know you with the info below</h2>
                        
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            value={this.state.first_name}
                            type="text"
                            onChange={this.updateFirstname.bind(this)}
                            placeholder="Ex. Jane"
                        />
                        <input
                            value={this.state.last_name}
                            type="text"
                            onChange={this.updateLastname.bind(this)}
                            placeholder="Ex. Smith"
                        />
                        <div className="buttonsContainer">
                            <button type="submit">Edit Profile</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default EditProfile;