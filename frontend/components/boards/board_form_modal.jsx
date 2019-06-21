import React from 'react';
class BoardFormModal extends React.Component {

    openModal() {
        this.setState({ modalIsOpen: true, editHovered: true, hovered: false });
    }

    closeModal() {
        this.setState({ modalIsOpen: false, editHovered: true });
    }

    openCreateModal() {
        this.setState({ createModalIsOpen: true });
    }

    closeCreateModal() {
        this.setState({ createModalIsOpen: false });
    }

    constructor(props) {
        this.state = {
            modalIsOpen: false,
            createModalIsOpen: false,
            ModalVisibleStatus: false
        }
    }

    render() {return (
        <Modal
            isOpen={this.state.createModalIsOpen}
            onRequestClose={this.closeCreateModal}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
            animationType={'slide'}
            isVisible={this.state.ModalVisibleStatus}
            contentLabel="Board edit form"
        >
            <CreateBoardContainer />
        </Modal>)

    }
}