import React from 'react';
import EditBoardContainer from '../boards/edit_board_container';
import GreetingContainer from '../header/greeting_container';

class Pin extends React.Component {
	componentWillMount() {
		this.props.fetchBoards(this.props.username);
	}

	constructor(props) {
		super(props);
		this.state = props.pin;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFile = this.handleFile.bind(this);
		this.updateBoardInfo = this.updateBoardInfo.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const fd = new FormData();
		fd.append('pin[author_id]', this.state.author_id);
		fd.append('pin[title]', this.state.title);
		fd.append('pin[description]', this.state.description);
		fd.append('pin[link_url]', this.state.link_url);
		fd.append('pin[photo]', this.state.photoFile);
		fd.append('pin[board_id]', this.state.board_id);
		this.props.action(fd);
		let path = `/`;
		this.props.history.push(path);
	}

	handleFile(e) {
		e.preventDefault();

		const file = e.currentTarget.files[0];
		const fileReader = new FileReader();

		fileReader.onloadend = () => {
			this.setState({
				photoFile: file,
				photoUrl: fileReader.result,
				imageUrl: fileReader.result,
				imageFile: file,
			});
		};
		if (file) {
			fileReader.readAsDataURL(file);
		} else {
			this.setState({ imageUrl: '', imageFile: null });
		}
	}
	updateTitle(e) {
		this.setState({ title: e.target.value });
	}

	updateDescription(e) {
		this.setState({ description: e.target.value });
	}

	updateLink(e) {
		this.setState({ link_url: e.target.value });
	}

	toggleBoardList() {
		let status = !this.state.showBoardList;
		this.setState({ showBoardList: status });
	}

	updateBoardInfo(board_id, boardName) {
		this.setState({ board_id, boardName });
		this.toggleBoardList();
	}

	render() {
		let boardNames = (
			<div class="boardNamesWrapper">
				<ul class="boardNames">
					{this.props.boards.map(board => {
						return (
							<li onClick={() => this.updateBoardInfo(board.id, board.title)}>
								<span>{board.title}</span>
							</li>
						);
					})}
					<li className="createBoardLi">
						<span>
							<i class="fas fa-plus-circle fa-2x" /> Create Board
						</span>
					</li>
				</ul>
			</div>
		);

		let previewImg;
		if (this.state.imageFile) {
			previewImg = <img className="previewImg" src={`${this.state.imageUrl}`} />;
		} else {
			previewImg = (
				<div className="fileContainer">
					<input type="file" id="file" name="file" className="inputfile" onChange={this.handleFile} />

					<label htmlFor="file">
						<div class="fileTextContainer">
							<i className="fas fa-cloud-upload-alt fa-2x" />
							<p className="fileText">Drag and drop or click to upload</p>
						</div>
					</label>
				</div>
			);
		}

		let pinForm = (
			<div id="rightCreateForm">
				<div id="rightTopCreateForm">
					<div className="buttonsContainer">
						<button onClick={this.handleSubmit}>
							<i class="createPinSaveBtn fas fa-thumbtack" /> <span>Save</span>
						</button>
					</div>

					<input
						id="createTitle"
						value={this.state.title}
						type="text"
						onChange={this.updateTitle.bind(this)}
						placeholder="Add a title"
					/>

					<textarea
						value={this.state.description}
						onChange={this.updateDescription.bind(this)}
						placeholder="Say more about this pin"
					/>
				</div>
				<div>
					<input
						value={this.state.link_url}
						type="text"
						onChange={this.updateLink.bind(this)}
						placeholder="Add the URL this pin links to"
					/>
					<input
						id="chooseBoard"
						type="text"
						value={this.state.boardName}
						onClick={this.toggleBoardList.bind(this)}
						placeholder="Choose a board (required)"
					/>
				</div>{' '}
			</div>
		);

		let content = this.state.showBoardList ? boardNames : pinForm;

		return (
			<div>
				<GreetingContainer />
				<div className="pinFormContainer">
					<div className="containerContainer">
						<div className="formContainer">
							<form id="createPinForm">
								<div id="leftCreateForm">{previewImg}</div>
								{content}
							</form>{' '}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Pin;
