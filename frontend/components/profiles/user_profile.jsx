import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    componentDidMount(){
        this.props.fetchBoards(this.props.user.id);
        this.props.user.pin_ids.forEach(pinId => {
            return this.props.fetchPin(pinId);
        });
      
        this.getImages = this.getImages.bind(this);
    }

    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false,
            currentPage: 'boards',
            pinList: null,
            hovered: false
        };
        this.addHovered = this.addHovered.bind(this);
        this.removeHovered = this.removeHovered.bind(this);
        this.renderBoards = this.renderBoards.bind(this);
        this.renderPins = this.renderPins.bind(this);
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    showBoards() {
        this.setState({currentPage: 'boards'})
    }

    showPins() {
        this.setState({currentPage: 'pins'})
    }

    getImages(board) {
        const { pins } = this.props;
        if (Object.keys(pins).length === 0) return null;
        if (board.pin_ids.length === 0) return null;
        
        return (<div className="pinWrapperContainer">
            {board.pin_ids.map(pin_id => {  
                if (!pins[pin_id]) return null;              
                return (
                    
                    <div className="pinWrapper" key={pin_id}>
                        <img src={pins[pin_id].photoUrl} className="pinImg" />
                        <div className="pinText"></div>
                    </div>
                )
            })}
        </div>
        )
    }

    addHovered(id) {
        this.setState({ hovered: id })
    }

    removeHovered() {
        this.setState({ hovered: false })
    }

    renderBoards() {
        let boards = (this.props.boards) ? this.props.boards : [];

        let boardList = (<div class="gridContainer">{
            boards.map(board => {

                return (

                    <div className="grid">
                        <Link to={`/board/${board.id}`}>
                            <div
                                className="boardWrapper"
                                onMouseOver={() => this.addHovered(board.id)}
                                onMouseLeave={this.removeHovered}
                            >
                                <div className="boardImg" >
                                    <span>{this.getImages(board)}</span>
                                </div>
                                <div className="boardText"></div>
                                <div className="boardLinks">
                                    <div className="leftBoardLinks">
                                        <div className="boardTitle">
                                            {board.title}
                                        </div>
                                        <div className="numPins">
                                            {board.pins.length} Pins
                            </div>
                                    </div>
                                    <div className={this.state.hovered === board.id ? "rightBoardLinks" : "rightBoardLinks hidden"}>
                                        <Link to={`/board/${board.id}/edit`}>
                                            <i className="fas fa-edit fa-lg"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div></Link></div>
                )
            })
        }</div>)

        return boardList;
    }

    renderPins() {
        const pins = Object.values(this.props.pins);
        let pinList = (
            <div className="grid" id="userPinGrid">
            {
                pins.map(pin => {
                    let title = pin.title ? pin.title : null;
                    return (
                        <Link to={`/pin/${pin.id}`}>
                            <div className="pinWrapper" key={pin.id}>
                                <img src={pin.photoUrl} className="pinImg" />
                                <div className="pinText"></div>
                                <div className="pinTitle">
                                    <span>{title}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        );
        return pinList;
    }

    render() {
             
        let content = (this.state.currentPage === 'boards') ? this.renderBoards() : this.renderPins();

        
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
                    <span onClick={this.showBoards.bind(this)} className="headerLinkText active">Boards</span>
                    <span onClick={this.showPins.bind(this)} className="headerLinkText">Pins</span>

                
                </div>
                    </div>
                <div className="profileContent">
                            {content}
                    </div>
                </div>
                <div className="addPinBtnContainer"><Link to="/pin/new"><button className="addPinBtn"><span>+</span></button></Link></div>
            </div>
        )
    }
}

export default UserProfile;