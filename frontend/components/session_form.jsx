import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            img_url: "default-profile-pic"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchFormType = this.switchFormType.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updateUsername(e) {
        this.setState({ username: e.target.value })
    }

    updatePassword(e) {
        this.setState({ password: e.target.value })
    }

    updateEmail(e) {
        this.setState({ email: e.target.value })
    }

    demoLogin() {
        this.setState({ email: 'mittens@mittens.com', password: '123456'});  
    }

    switchFormType() {
        if (this.props.path === '/login') {
            return (
                <Link to="/signup">
                    <button onClick={this.props.clearErrors} className="switchBtn">Sign Up</button>
                </Link>
            )
        } else {
            return (
                <Link to="/login"> <button onClick={this.props.clearErrors} className="switchBtn"> Log In</button></Link >
            )
        }
    }

    render() {
        let demo, username;
        if (this.props.path === '/login') {
            demo = (<button id="demo" onClick={this.demoLogin.bind(this)} type="submit">Demo</button>)
        } else {
            username = (<input
                value={this.state.username}
                type="text"
                onChange={this.updateUsername.bind(this)}
                placeholder="Username"
            />)
        }

        let switchForm = this.switchFormType();
        return (
            <div id="sessionForm">
                
                <div className="containerContainer">
                    {switchForm}
                    <div className="formContainer">
                        {this.state.errors}
                        <div className="headingsContainer">
                            <i className="fab fa-pinterest logo fa-3x"></i>
                            <h1>{this.props.formType} to see more</h1>
                            <h2>Access Pinify's best ideas with a free account</h2>
                            
                        </div>
                        <span className="sessionErrors">{this.props.errors}</span>

                        <form onSubmit={this.handleSubmit}>
                        {username}
                        <input
                            value={this.state.email}
                            type="text"
                            onChange={this.updateEmail.bind(this)}
                            placeholder="Email"
                        />
                        <input 
                            value={this.state.password} 
                            type="password" 
                            onChange={this.updatePassword.bind(this)}
                            placeholder="Password"
                        />
                        <div className="buttonsContainer">
                                <button type="submit">{this.props.formType}</button>
                            {demo}
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default SessionForm;