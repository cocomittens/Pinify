import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Greeting extends React.Component {
    componentDidMount() {
        switch(this.props.match.path) {
            case "/users":
                this.setState({ currentPage: 'profile' });
            case "/following":
                this.setState({ currentPage: 'following' });
            default:
                this.setState({ currentPage: 'home' });
        }
        
    }

    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this);
        
        this.state = {
            active: false,
            currentPage: null
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        let user = this.props.currentUser;
        let name;
        
        name = (user.first_name) ? user.first_name : user.username;
    
        return (
            <header>
            <div id="leftnav">
                <Link to="/"><i className="fab fa-pinterest logo fa-2x"></i></Link>
            </div>
            <div id="rightnav">
                    <Link to="/"><h1 
                        className={this.state.currentPage === 'home' ? "home active" : "home"}>
                            Home
                        </h1>
                    </Link>
                    <Link to="/following"><h1
                        className={this.state.currentPage === 'following' ? "home active" : "home"}>
                        Following
                        </h1>
                    </Link>
                <div id="nameContainer">
                        <Link to={`/users/${user.username}`}><h1
                            
                        >
                        <span className="circle">{name.slice(0, 1).toUpperCase()}</span>
                            <span className={this.state.currentPage === 'profile' ? "headerLinkText active" : "headerLinkText"}>{name}</span>
                        </h1>
                        </Link>
                </div>
                
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