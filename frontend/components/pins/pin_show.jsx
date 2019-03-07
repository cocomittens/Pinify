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

    constructor(props) {
        super(props);
        this.state = {deleted: false,
        modalIsOpen: false};
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        let photo = null, title = null, description = null, linkUrl = null;
        let redirect = (this.state.deleted) ? (<Redirect to="/" /> ): null;

        if (this.props.pin) {
            photo = (<img src={this.props.pin.photoUrl} />);
            title = (this.props.pin.title);
            description = (this.props.pin.description);
            linkUrl = (this.props.pin.link_url)
        } 
        this.props.fetchPin(this.props.pinId);
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