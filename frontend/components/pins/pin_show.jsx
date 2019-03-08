import React from 'react';
import GreetingContainer from '../header/greeting_container';
import EditPinContainer from './edit_pin_container';
import Modal from 'react-modal';
import { Link, Redirect } from 'react-router-dom';

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
        zIndex: 9999
    }
};

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
    }

    componentDidUpdate(prev) {
        if (prev.pin !== this.props.pin) {
            this.props.fetchUser(this.props.pin.author_id)
        }
    }

    constructor(props) {
        super(props);
        this.state = {deleted: false,
        modalIsOpen: false, 
        active: false};
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    toggleClass() {
        let value = !this.state.active;
        this.setState({active: value})
    }

    render() {
        if (!this.props.pin || Object.values(this.props.user).length === 0) return null;

        let photo = null, title = null, description = null, linkUrl = null, name =  null, firstBoard = null, follows = null;
        let redirect = (this.state.deleted) ? (<Redirect to="/" /> ): null;
   
        photo = (<img src={this.props.pin.photoUrl} />);
        title = (this.props.pin.title);
        description = (this.props.pin.description);
        linkUrl = (this.props.pin.link_url);
        name = <span>{this.props.user.first_name} {this.props.user.last_name}</span>;
        follows = <span>{this.props.user.followers.length} followers</span>
        firstBoard = this.props.boards[0].title;

        return (
            <div className="pinShowPage">
                <GreetingContainer />
                <div className="containerContainer">
                    <Link to="/"> <button class="switchBtn"><i class="fas fa-chevron-left"></i> Home</button></Link>
                    <div className="formContainer">
                        <div className="leftPinShowPage">
                            <div onClick={this.openModal} className="pinShowEditBtn">
                                <i className="fas fa-edit fa-lg"></i>
                            </div>
                            <div className="hoverBtns">
                                <div className="pinDropdown">
                                    <button
                                        onClick={this.toggleClass}
                                        className={this.state.active ? "pinDropbtn fullLength" : "pinDropbtn"}>{firstBoard}
                                    </button>
                                    <button className={this.state.active ? "saveBtn hidden" : "saveBtn"}>Save</button>
                                    <ul class={this.state.active ? "pinDropdownContent" : "pinDropdownContent hidden"}>
                                        {this.props.boards.map(board => {
                                            return <li onClick={() => this.addPin(board.id, pin.id)}><span>{board.title}</span></li>
                                        })}
                                    </ul>
                                </div>
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
                                <EditPinContainer />
                            </Modal>  
                            {photo}
                        </div>
                    
                        <div class="pinShowContent">
                            <h1> {title}</h1>
                            <p class="pinAuthorName"> {name}</p>
                            <p> {follows} </p>
                            <p> {description} </p>
                            <p> {linkUrl} </p>
                        </div>
                    </div>
                </div>

                <Link to="/pin/new"><div className="addPinBtnContainer"><button className="addPinBtn"><span>+</span></button></div></Link>
                {redirect}
            </div>
        )
    }
}

export default PinShow;