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
        let photo = null, title = null, description = null, linkUrl = null;
        let redirect = (this.state.deleted) ? (<Redirect to="/" /> ): null;
        

        if (this.props.pin) {
            photo = (<img src={this.props.pin.photoUrl} />);
            title = (this.props.pin.title);
            description = (this.props.pin.description);
            linkUrl = (this.props.pin.link_url)
        } 
        this.props.fetchPin(this.props.pinId);
        return (
            <div className="pinShowPage">
                <GreetingContainer />
                    <div className="containerContainer">
                    <Link to="/"> <button class="switchBtn"><i class="fas fa-chevron-left"></i> Home</button></Link>

                        <div className="formContainer">

                        <div className="leftPinShowPage">
                        <div className="pinShowEditBtn">
                        <Link to={`/pin/${this.props.pinId}/edit`}>
                                <i className="fas fa-edit fa-lg"></i>

                                </Link></div>
                                {photo}
                        </div>

                                <div class="pinShowContent">
                                        <h1> {title}</h1>
                                        <p> {description} </p>
                                        <p> {linkUrl} </p>
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