import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        let user = this.props.currentUser;
        return (
            <header>
            <div id="leftnav">
                <Link to="/"><i className="fab fa-pinterest logo fa-2x"></i></Link>
            </div>
            <div id="rightnav">
                <h1>{user.username}</h1><br></br>
                <div className="dropdown">
                    <i onClick={this.toggleClass} className="dropbtn fas fa-ellipsis-h fa-lg"></i>
                    {this.state.active
                    ? (
                        <ul className='dropdown-content'>
                                <Link to="/edit">Edit settings</Link>
                                <a onClick={this.props.logout}>Logout</a>
                                
                    </ul>
                    ) : (null)}
                </div>
            </div>
            </header>
        )    
    }
}


export default withRouter(Greeting);