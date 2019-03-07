import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchPins(1);
    }

    addHovered(id) {
        this.setState({ hovered: id })
    }

    removeHovered() {
        this.setState({ hovered: false })
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    constructor(props) {
        super(props);
        this.state = ({hovered: false,
        active: false})
        this.addHovered = this.addHovered.bind(this);
        this.removeHovered = this.removeHovered.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }

    render() {
        let pins = (this.props.pins) ? this.props.pins : []; 
         
        let list = (<div className="grid">
                {pins.map(pin => {
                    
                let title = pin.title ? pin.title : null;
                    return (
                        
                        <div onMouseOver={() => this.addHovered(pin.id)}
                        onMouseLeave={this.removeHovered}
                        className="pinWrapper"
                        key={pin.id}>
                                
                            <div className="pinText"></div>
                                <div
                                    className={this.state.hovered === pin.id ? "pinDropdown" : "pinDropdown hidden"}
                                ><button 
                                onClick={this.toggleClass}
                                className="pinDroptn">Choose a board</button>
                                        <div class={this.state.active ? "pinDropdownContent" : "pinDropdownContent hidden"}>
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <a href="#">Link 3</a>
                                        </div>

                                    </div>
                                <img src={pin.photoUrl} className="pinImg" />
                                <div className="pinText"></div>
                                <div className="pinTitle">
                                    <span>{title}</span>
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

export default Splash;