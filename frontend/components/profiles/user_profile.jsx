import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    componentDidMount(){
        this.props.fetchPins(1);
        this.props.fetchBoards(this.props.id);
        this.getImages = this.getImages.bind(this);
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

    getImages(board) {
       return (<div className="pinWrapperContainer">
            {board.pins.map(pin => {

                return (
                    <div className="pinWrapper" key={pin.id}>
                        <img src={pin} className="pinImg" />
                        <div className="pinText"></div>
                    </div>
                )
            })}
        </div>
        )
    }

    render() {

        let boards = (this.props.boards) ? this.props.boards : []; 
        
        

        
        
        let list = (<div class="gridContainer">{
            boards.map(board => {

                return (
                    <div className="grid">
                    <div className="boardWrapper">
                        <div className="boardImg" >
                            <span>{this.getImages(board)}</span>
                        </div>
                        <div className="boardText"></div>
                        <div className="boardTitle">
                            {board.title}
                        </div>
                        <div className="numPins">
                            {board.pins.length} Pins
                         </div>
                    </div></div>
                )
            })
        }</div>)
        
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