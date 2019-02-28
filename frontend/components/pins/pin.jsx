import React from 'react';

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

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.title}
                    type="text"
                    onChange={this.updateTitle.bind(this)}
                    placeholder="Title"
                />
                <input
                    value={this.state.link_url}
                    type="text"
                    onChange={this.updateLink.bind(this)}
                    placeholder="Link"
                />
                <div className="buttonsContainer">
                    <button type="submit">Create!</button>
                </div>
            </form>
            </div>
        )
    }
}

export default Pin;