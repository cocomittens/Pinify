import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    componentDidMount(){
        this.props.fetchBoards(this.props.id)
    }

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
        let boards = (this.props.boards) ? this.props.boards : []; 
        let list = (<div className="grid">{
            boards.map(board => {
                return (
                    <div className="boardWrapper">
                        <img className="boardImg" />
                        <div className="boardText"></div>
                        <div className="boardTitle">
                            {board.title}
                        </div>
                        <div className="numPins">
                            {board.pins.length} Pins
                         </div>
                    </div>
                )
            })
        }
        </div>)
        return (
            <div>
                <GreetingContainer />
                <div className="userProfileContainer">
                <div className="profileHeader">
                <div className="profileHeaderTop">
                <div className="dropdown">
                    <i onClick={this.toggleClass} className="dropbtn fas fa-plus fa-lg"></i>

                    {this.state.active
                        ? (
                            <ul className='dropdown-content'>
                                <Link to="/pin/new">Create pin</Link>
                                <Link to="/board/new">Create board</Link>
                            </ul>
                        ) : (null)}
                    </div>
        
                    <div className="dropdown">
                        <Link to="/edit">
                        <i className="dropbtn fas fa-edit fa-lg"></i>
                        </Link>

                    </div>
                            
                    </div>

                <div className="profileHeaderMid">
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                </div>

                <div className="profileHeaderBottom">
                    <span className="headerLinkText active">Boards</span>
                    <span className="headerLinkText">Pins</span>

                
                </div>
                    </div>
                <div className="profileContent">
                
                            {list}
                
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;