import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchPins(1)
        debugger
    }

    render() {
        
        let list = (<div className="grid">
                {this.props.pins.map(pin => {
                    let title = pin.title ? pin.title : null;
                    return (
                        <div className="pinWrapper">
                            <div className="pinImgWrapper"><img src={pin.photoUrl}></img></div>
                            <div className="pinText">{title}</div>
                        </div>
                    )
                })}
            </div>
            )
        
        return (
            <div>   
                    <GreetingContainer />
                    {list}
                    
                <Link to="/pin/new"><div className="addPinBtnContainer"><button className="addPinBtn">+</button></div></Link>
                    
            </div>
        )
    }
};

export default Splash;