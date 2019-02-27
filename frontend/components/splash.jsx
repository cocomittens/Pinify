import React from 'react';
import GreetingContainer from './greeting_container'

class Splash extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div id="leftnav">
                        <i className="fab fa-product-hunt logo fa-2x"></i>
                    </div>
                    <GreetingContainer />
                </header>
                <ul id="pins">
                    {this.props.pins.map(pin => {
                        return (<li key={pin.id}>{pin.title}</li>)
                    })}
                </ul>
            </div>
        )
    }
};

export default Splash;