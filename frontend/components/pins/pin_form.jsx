import React from 'react';
import GreetingContainer from '../header/greeting_container';

class Pin extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.pin;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    updateTitle(e) {
        this.setState({title: e.target.value});
    }

    updateLink(e) {
        this.setState({link_url: e.target.value})
    }

    updateImage(e) {
        this.setState({ image_url: e.target.value })
    }

    render() {
        return (
            <div>
            <GreetingContainer />
            <div className="pinFormContainer">
            <div className="containerContainer">

                <div className="formContainer">
                    <div className="headingsContainer">
                        <div id="headings">
                            <h1>{this.props.formType}</h1>
                            <h2>Pins are kinda like the point of this site, make one here !</h2>
                        </div>
                    </div>

                    <form id="createPinForm">
                        <label>Title<br></br>
                            <input
                                value={this.state.title}
                                type="text"
                                onChange={this.updateTitle.bind(this)}
                                placeholder="Cool stuff"
                            /></label>
                        <label>Link URL<br></br>
                            <input
                                value={this.state.link_url}
                                type="text"
                                onChange={this.updateLink.bind(this)}
                                placeholder="www.google.com"
                            /></label>
                            <label>Image URL<br></br>
                                <input
                                    value={this.state.image_url}
                                    type="text"
                                    onChange={this.updateImage.bind(this)}
                                    placeholder="www.imgur.com/6rgnj3"
                                /></label>
                            <div className="buttonsContainer">
                                <button onClick={this.handleSubmit}>{this.props.formType}!</button>
                            </div>
                        
                    </form>
                </div>
            </div>
                </div></div>
        )
    }
}

export default Pin;