import { connect } from 'react-redux';
import { updateBoard, fetchBoard } from '../../actions/board_pin_actions';
import BoardForm from './board_form';
import React from 'react';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        userId: Object.values(state.entities.users)[0].id,
        boardId: ownProps.match.params.boardId,
        board: Object.values(state.entities.boards).slice(-1)[0],
        formType: "Edit"
    }
}

const mdp = dispatch => {
    return {
        action: board => dispatch(updateBoard(board)),
        fetchBoard: boardId => dispatch(fetchBoard(boardId))
    }
}

class EditBoardForm extends React.Component{
    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {
        return (
            <BoardForm 
                action={this.props.action}
                userId={this.props.userId}
                title={this.props.title}
                boardId={this.props.boardId}
                formType={this.props.formType}
            ></BoardForm>
        )
    }
}

const EditBoardContainer = withRouter(connect(msp, mdp)(EditBoardForm));
export default EditBoardContainer;