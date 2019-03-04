import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link, Redirect } from 'react-router-dom';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
        
    }

    constructor(props) {
        super(props);
        this.state = {deleted: false}
    }

    render() {
        let photo = (this.props.pin) ? ( <img src={this.props.pin.photoUrl} /> ) : null;
        let redirect = (this.state.deleted) ? (<Redirect to="/" /> ): null;
        this.props.fetchPin(this.props.pinId);
        return (
            <div className="pinShowPage">
                <GreetingContainer />

            

                    <div className="containerContainer">

                        <div className="formContainer">

                        <div className="leftPinShowPage">
                        <Link to={`/pin/${this.props.pinId}/edit`}>
                                <i className="dropbtn fas fa-edit fa-lg"></i>

                        </Link>
                            <div className="pinShowPhoto">
                                {photo}
                            </div>
                        </div>

                                <div class="pinShowContent">
                                        <h1> title goes here</h1>
                                    </div>

                                

                        </div>
                    </div>



               
                
                <Link to="/pin/new"><div className="addPinBtnContainer"><button className="addPinBtn"><span>+</span></button></div></Link>
                {redirect}
            </div>
        )
    }
}

export default PinShow;