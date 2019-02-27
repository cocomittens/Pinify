import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        {
            if (this.props.currentUser) {
                let user = this.props.currentUser;
                return (
                    <div id="rightnav">
                        <h1>{user.username}</h1><br></br>

                        <div className="dropdown">
                            <i onClick={this.toggleClass} className="dropbtn fas fa-ellipsis-h fa-lg"></i>
                            {this.state.active
                            ? (
                                <ul className='dropdown-content'>
                                        <a onClick={this.props.logout}>Logout</a>
                                
                            </ul>
                            ) : (null)}
                            
                        </div>
                    </div>
                )
            }
            else {
                {
                    if (this.props.path === '/login') {
                        return (
                            <div>
                                <Link to="/signup">Sign Up</Link>
                            </div>
                        )
                    } else if (this.props.path === '/signup') {
                        return (
                            <Link to="/login">Log In</Link>
                        )
                    } else {
                        return (
                            <div>
                                <Link to="/signup">Sign Up</Link> <br></br>
                                <Link to="/login">Log In</Link>
                            </div>
                        )
                    }
                }
            }
        }
    }
}


export default withRouter(Greeting);