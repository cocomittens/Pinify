import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/core';


const override = css`
    display: inline-block;
    margin: 0 auto;
	border-color: red;
	
`;

class Splash extends React.Component {
	componentDidMount() {
		this.props.clearPins();
		this.props.clearUsers();
		this.props.fetchBoards('mittens').then(res => {
			let boards = Object.values(res.boards);
			boards.forEach(board => {
				this.props.fetchPins(board.id)
			});
		});
		this.props.fetchBoards('fluffy').then(res => {
			let boards = Object.values(res.boards);
			boards.forEach(board => {
				this.props.fetchPins(board.id);
			});
		});
		setTimeout(() => {
			console.log(this.props.pins);
			if (this.props.pins) this.loadPins();


		}, 2000)
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
		this.state = { hovered: false, 
			active: false, 
			pins_board: null, 
			selectedBoard: null,
			loadedPins: [],
			hasMorePins: true,
			loading: false
		};
		this.addHovered = this.addHovered.bind(this);
		this.removeHovered = this.removeHovered.bind(this);
		this.addActive = this.addActive.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
		this.addPin = this.addPin.bind(this);
		this.removePin = this.removePin.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.loadPins = this.loadPins.bind(this);
	}

	loadPins() {
		if (this.state.loadedPins.length > this.props.pins.length) {

			this.setState({ hasMorePins: false });
		} else {
			this.setState(
				{ loading: true }, () => {
				setTimeout(() => {
				
					this.setState({ loadedPins: this.state.loadedPins.concat(this.props.pins.slice(this.state.loadedPins.length, this.state.loadedPins.length + 12)) }, () => {
						this.setState({ loading: false })
					})
					console.log(this.state);

				}, 200)
				}	)
					
				}	
			
		}
	

	render() {
		if (this.props.boards.length === 0) return null;
		let pins = this.state.loadedPins;
		let firstBoard = this.props.boards[0].title;
		let currentBoard = this.state.selectedBoard ? this.state.selectedBoard : firstBoard;

		let list = (
			<InfiniteScroll 
				scrollThreshold={1}
				dataLength={this.state.loadedPins.length} //This is important field to render the next data
				next={this.loadPins}
				hasMore={this.state.hasMorePins}
				loader={
					<BounceLoader
						css={override}
						sizeUnit={"px"}
						size={150}
						color={'#123abc'}
						loading={this.state.loading}
					/>

				}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
				initialScrollY={200}
		
				


			><div className="grid">
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
			</InfiniteScroll>
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
