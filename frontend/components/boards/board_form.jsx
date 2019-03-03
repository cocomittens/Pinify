import React from 'react';
import { Link } from 'react-router-dom'

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: props.userId,
            title: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const board = Object.assign({}, this.state);
        this.props.createBoard(board);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }

    render() {
       
        return (
            <div id="boardForm">

                <div className="containerContainer">
                    
                    <div className="formContainer">
                        {this.state.errors}
                        <div className="headingsContainer">
                            <h1>Create board</h1>
                        </div>
                        {/* <ul className="sessionErrors">{this.props.errors.map((error, idx) => {
                            return (<li key={idx}>{error}</li>)
                        })}</ul> */}
                 
                        <form onSubmit={this.handleSubmit}>
                            <label><span>Name</span>
                            <input
                                value={this.state.updateTitle}
                                type="text"
                                onChange={this.updateTitle.bind(this)}
                                placeholder="Name"
                                /></label>
                 
                            <div className="buttonsContainer">
                                <button type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardForm;