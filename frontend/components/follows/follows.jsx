import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class Follows extends React.Component {
	componentDidMount() {
		this.props.clearPins();
		this.props.clearUsers();
		this.props.currentUser.follows.forEach(follow => {
			this.props.fetchUser(follow.follower_id);
		})
	}

	componentDidUpdate() {
		if(!Object.values(this.props.pins).length) {
			this.props.users.forEach(user => {
				user.pin_ids.forEach(id => {
					this.props.fetchPin(id);
				})
			})
		}
	}

	addHovered(id) {
		this.setState({
			hovered: id,
		});
	}

	removeHovered() {
		this.setState({
			hovered: false,
			active: false,
			users: [],
		});
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
		this.state = {
			hovered: false,
			active: false,
			user: null,
		};
		this.addHovered = this.addHovered.bind(this);
		this.removeHovered = this.removeHovered.bind(this);
		this.addActive = this.addActive.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
	}

	render() {
		if (!this.props.users.length) return null;
		let firstBoard = this.props.users[0].boards[0].title;
		let list = (
			<div className="grid">
				{Object.values(this.props.pins).map(pin => {
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
										<button onClick={() => this.toggleClass(pin.id)} className="pinDropbtn">
											{firstBoard}
										</button>
										<button className="saveBtn">Save</button>
										<ul
											className={
												this.state.active === pin.id
													? 'pinDropdownContent'
													: 'pinDropdownContent hidden'
											}
										>
											{this.props.users[0].boards.map(board => {
												return (
													<li>
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

export default Follows;
