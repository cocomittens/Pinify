import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
    }

    render() {
        
        let photo = (this.props.pin) ? ( <img src={this.props.pin.photoUrl} /> ) :  null;
        
        return (
            <div className="pinShowPage">
                <GreetingContainer />
                <div className="pinShowPhoto">
                {photo}
                </div>
                <Link to="/pin/new"><div className="addPinBtnContainer"><button className="addPinBtn"><span>+</span></button></div></Link>
            </div>
        )
    }
}

export default PinShow;