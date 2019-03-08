import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class Follows extends React.Component {
    componentDidMount() {
        this.props.fetchUser("fluffy")
    }

    componentDidUpdate(prev) {
        if (prev.user !== this.props.user) {
            this.setState({ user: this.props.user })

        }
        if (this.props.boards.length === 0 && Object.values(this.props.user.boards).length > 0) {
            this.props.fetchBoards(this.props.user.username);
        } else {
            if (Object.values(this.props.pins).length === 0 &&

                Object.values(this.props.user.pins).length > 0) {

                this.props.user.boards.forEach(board => {
                    this.props.fetchPinsNoReplace(board.id)
                })
            }


        }
    }

    addHovered(id) {
        this.setState({
            hovered: id,
        })
    }

    removeHovered() {
        this.setState({
            hovered: false,
            active: false,
            user: null
        })
    }

    addActive(id) {
        this.setState({ active: id });
    }

    toggleClass(id) {
        if (!this.state.active) {
            this.addActive(id);
        } else {
            this.setState({ active: false })
        }
    };

    constructor(props) {
        super(props);
        this.state = ({
            hovered: false,
            active: false,
            user: null
        })
        this.addHovered = this.addHovered.bind(this);
        this.removeHovered = this.removeHovered.bind(this);
        this.addActive = this.addActive.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }

    render() {
        
        if (!this.props.user.pins) return null;
        let firstBoard = Object.values(this.props.user.boards)[0].title
        let list = (<div className="grid">
            {Object.values(this.props.pins).map(pin => {
                
                let title = pin.title ? pin.title : null;
                return (
                    <div>
                        <div onMouseOver={() => this.addHovered(pin.id)}
                            onMouseLeave={this.removeHovered}
                            className="pinWrapper"
                            key={pin.id}>

                            <div className="hoverBtns">
                                <div
                                    onMouseOver={() => this.addHovered(pin.id)}
                                    className={this.state.hovered === pin.id ? "pinDropdown" : "pinDropdown hidden"}
                                ><button
                                    onClick={() => this.toggleClass(pin.id)}
                                    className="pinDropbtn">{firstBoard}</button><button

                                        className="saveBtn">Save</button>
                                    <ul className={this.state.active === pin.id ? "pinDropdownContent" : "pinDropdownContent hidden"}>
                                        {this.props.user.boards.map(board => {
                                            return <li><span>{board.title}</span></li>
                                        })}
                                    </ul>

                                </div></div>

                            <Link to={`pin/${pin.id}`}>
                                <div className="pinText"></div>
                                <div className="pinInfo">
                                    <img src={pin.photoUrl} className="pinImg" />

                                    <div className="pinTitle">
                                        <span>{title}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>


                )
            })}
        </div>
        )

        return (
            <div>
                <GreetingContainer />
                {list}
                <div className="addPinBtnContainer"><Link to="/pin/new"><button className="addPinBtn"><span>+</span></button></Link></div>
            </div>
        )
    }
};

export default Follows;