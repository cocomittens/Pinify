import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
	componentDidMount() {
		this.props.fetchPins(1);
		this.props.fetchPins(2);
		this.props.fetchPins(3);
		this.props.fetchBoards(this.props.username);
	}

	addPin(board_id, pin_id, selectedBoard) {
		let pins_board = { board_id, pin_id };
		this.setState({ pins_board, active: false, selectedBoard });
	}

	removePin() {
		this.setState({ pins_board: null, selectedBoard: null });
	}

	handleSave(pin_id) {
		let defaultBoardId = this.props.boards[0].id;
		if (!this.state.pins_board) {
			let pins_board = { board_id: defaultBoardId, pin_id };
			setState({ pins_board });
		}
		this.props.createPinsBoard(this.state.pins_board);
	}

	addHovered(id) {
		this.setState({ hovered: id });
	}

	removeHovered() {
		this.setState({ hovered: false, active: false });
		this.removePin();
	}

	addActive(id) {
		this.setState({ active: id });
	}

	toggleClass(id) {
		if (!this.state.active) {
			this.addActive(id);
		} else {
			this.setState({ active: false });
		}
	}

	constructor(props) {
		super(props);
		this.state = { hovered: false, active: false, pins_board: null, selectedBoard: null };
		this.addHovered = this.addHovered.bind(this);
		this.removeHovered = this.removeHovered.bind(this);
		this.addActive = this.addActive.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
		this.addPin = this.addPin.bind(this);
		this.removePin = this.removePin.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	render() {
		if (this.props.boards.length === 0) return null;
		let pins = this.props.pins ? this.props.pins : [];
		let firstBoard = this.props.boards[0].title;
		let currentBoard = this.state.selectedBoard ? this.state.selectedBoard : firstBoard;
		let list = (
			<div className="grid">
				{pins.map(pin => {
					let title = pin.title ? pin.title : null;
					return (
						<div>
							<div
								onMouseOver={() => this.addHovered(pin.id)}
								onMouseLeave={this.removeHovered}
								className="pinWrapper"
								key={pin.id}
							>
								<div className="hoverBtns">
									<div
										onMouseOver={() => this.addHovered(pin.id)}
										className={this.state.hovered === pin.id ? 'pinDropdown' : 'pinDropdown hidden'}
									>
										<button
											onClick={() => this.toggleClass(pin.id)}
											className={this.state.active ? 'pinDropbtn fullLength' : 'pinDropbtn'}
										>
											{currentBoard}
										</button>
										<button
											className={this.state.active ? 'saveBtn hidden' : 'saveBtn'}
											onClick={() => this.handleSave(pin.id)}
										>
											Save
										</button>
										<ul
											class={
												this.state.active === pin.id
													? 'pinDropdownContent'
													: 'pinDropdownContent hidden'
											}
										>
											{this.props.boards.map(board => {
												return (
													<li onClick={() => this.addPin(board.id, pin.id, board.title)}>
														<span>{board.title}</span>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
								<Link to={`pin/${pin.id}`}>
									<div className="pinText" />
									<div className="pinInfo">
										<img src={pin.photoUrl} className="pinImg" />
										<div className="pinTitle">
											<span>{title}</span>
										</div>
									</div>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		);

		return (
			<div>
				<GreetingContainer />
				{list}
				<div className="addPinBtnContainer">
					<Link to="/pin/new">
						<button className="addPinBtn">
							<span>+</span>
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Splash;
