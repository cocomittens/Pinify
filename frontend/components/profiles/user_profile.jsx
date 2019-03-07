import React from 'react';
import GreetingContainer from '../header/greeting_container';
import EditBoardContainer from '../boards/edit_board_container';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';


Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0
    },
    
    overlay: {
        zIndex: 9999999
    }
};



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
            hovered: false,
            editHovered: false,
            modalIsOpen: false,
            redirect: null
        };
        this.addHovered = this.addHovered.bind(this);
        this.removeHovered = this.removeHovered.bind(this);
        this.renderBoards = this.renderBoards.bind(this);
        this.addEditHovered = this.addEditHovered.bind(this);
        this.removeEditHovered = this.removeEditHovered.bind(this);
        this.renderPins = this.renderPins.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

   
    closeModal() {
        this.setState({ modalIsOpen: false});
    }

    renderRedirect(id) {
        debugger
        if (!this.state.editHovered) {
            this.setState({ redirect: <Redirect to={`/board/${id}`}></Redirect> })
        }
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

    addEditHovered() {
        this.setState({editHovered: true})
    }

    removeEditHovered() {
        this.setState({editHovered: false})
    }

    renderBoards() {
        let boards = (this.props.boards) ? this.props.boards : [];

        let boardList = (<div class="gridContainer">{
            boards.map(board => {

                return (
                    <div className="grid">
                        
                            <div
                                className="boardWrapper"
                                onMouseOver={() => this.addHovered(board.id)}
                                onMouseLeave={this.removeHovered}
                                onClick={() => this.renderRedirect(board.id)}
                            >
                            {this.state.redirect}
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
                                <div 
                                    onMouseOver={this.addEditHovered}
                                    onMouseLeave={this.removeEditHovered}
                                    onClick={this.openModal} 
                                    className={this.state.hovered === board.id ? "rightBoardLinks" : "rightBoardLinks hidden"}
                                >
                                            <i className="fas fa-edit fa-lg"></i>
                                            
                                         

                                    </div>

                                <Modal
                                    isOpen={this.state.modalIsOpen}
                                    onAfterOpen={this.afterOpenModal}
                                    onRequestClose={this.closeModal}
                                    shouldCloseOnOverlayClick={true}
                                    style={customStyles}
                                    
                                    animationType={"slide"}
                                    isVisible={this.state.ModalVisibleStatus}
                                    contentLabel="Board edit form"
                                >

                                    <EditBoardContainer />



                                </Modal>  

                                </div>
                            </div>
                          
                            </div>
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
                                            <a onClick={this.openModal}>Create board</a>
                                  
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
                    <span 
                        onClick={this.showBoards.bind(this)} 
                        className={this.state.currentPage === 'boards' ? "headerLinkText active" : "headerLinkText"}
                    >Boards</span>
                            <span onClick={this.showPins.bind(this)} 
                        className={this.state.currentPage === 'pins' ? "headerLinkText active" : "headerLinkText"}
                    >Pins</span>
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