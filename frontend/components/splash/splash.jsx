import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchPins(5)
    }

    render() {

        let list = (<div className="grid" data-masonry='{ "columnWidth": 80, "itemSelector": ".grid-item" }'>
                {this.props.pins.map(pin => {
                    return (
                        <div className="pinWrapper">
                            <div className="pinImgWrapper"><img className="pin" key={pin.id}  src={pin.link_url} /></div>
                            <div className="pinText">{pin.title}</div>
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