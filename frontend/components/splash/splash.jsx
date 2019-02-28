import React from 'react';
import GreetingContainer from '../header/greeting_container';

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchPins(1)
    }



    render() {
        let list = (<ul id="pins">
                {this.props.pins.map(pin => {
                    return (<li key={pin.id}>{pin.title}</li>)
                })}
            </ul>)
        
        return (
            <div>   
                    <GreetingContainer />
                    {list}
            </div>
        )
    }
};

export default Splash;