import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchPins(1);
        this.props.fetchBoards("mittens");
    }

    addHovered(id) {
        this.setState({ hovered: id,
        })
    }

    removeHovered() {
        this.setState({ hovered: false,
        active: false })
    }

    addActive(id) {
        this.setState({active: id});
    }

    toggleClass(id) {
        if(!this.state.active) {
            this.addActive(id);
        } else {
            this.setState({active: false})
        }
    };

    constructor(props) {
        super(props);
        this.state = ({hovered: false,
        active: false})
        this.addHovered = this.addHovered.bind(this);
        this.removeHovered = this.removeHovered.bind(this);
        this.addActive = this.addActive.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }

    render() {
        let pins = (this.props.pins) ? this.props.pins : []; 
         if (this.props.boards.length === 0) return null;
         
         let firstBoard = this.props.boards[0].title
        let list = (<div className="grid">
                {pins.map(pin => {
                    
                let title = pin.title ? pin.title : null;
                    return (
                        
                        <div onMouseOver={() => this.addHovered(pin.id)}
                            onMouseLeave={this.removeHovered}
                        className="pinWrapper"
                        key={pin.id}>
                                
                           
                            <div className="hoverBtns">
                                <div
                                    className={this.state.hovered === pin.id ? "pinDropdown" : "pinDropdown hidden"}
                                ><button
                                    onClick={() => this.toggleClass(pin.id)}
                                        className="pinDropbtn">{firstBoard}</button><button
                                          
                                            className="saveBtn">Save</button>
                                    <ul class={this.state.active === pin.id ? "pinDropdownContent" : "pinDropdownContent hidden"}>
                                        {this.props.boards.map(board => {
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

export default Splash;