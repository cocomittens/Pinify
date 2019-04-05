import React from 'react';

class BoardForm extends React.Component {
	componentDidMount() {
		if(this.props.formType === 'Edit') {
			this.props.fetchBoard(this.props.boardId);
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			author_id: props.session.id,
			title: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let board;
		if (this.props.formType == 'Create') {
			board = this.state;
		} else {
			board = Object.assign({}, this.state, { id: this.props.boardId, author_id: this.props.session.id });
		}
		this.props.action(board);
	}

	updateTitle(e) {
		this.setState({ title: e.target.value });
	}

	render() {
		return (
			<div className="boardForm">
				<div className="containerContainer">
					<div className="formContainer">
						{this.state.errors}
						<div className="headingsContainer">
							<h1>{this.props.formType} board</h1>
						</div>
						{/* <ul className="sessionErrors">{this.props.errors.map((error, idx) => {
                            return (<li key={idx}>{error}</li>)
                        })}</ul> */}

						<form onSubmit={this.handleSubmit}>
							<label>
								<span>Name</span>
								<input
									value={this.state.updateTitle}
									type="text"
									onChange={this.updateTitle.bind(this)}
									placeholder="Name"
								/>
							</label>

							<div className="buttonsContainer">
								<button type="submit">{this.props.formType}</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default BoardForm;
