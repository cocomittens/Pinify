import React from 'react';

class Splash extends React.Component {
    componentDidMount() {
        
    }

    render() {

        return (
            <div>
                <ul id="pins">
                    {this.props.pins.map(pin => {
                        return (<li key={pin.id}>{pin.title}</li>)
                    })}
                </ul>
            </div>)
    }
};

export default Splash;