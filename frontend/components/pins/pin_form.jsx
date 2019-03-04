import React from 'react';
import GreetingContainer from '../header/greeting_container';

class Pin extends React.Component {
    componentWillMount() {
        this.props.fetchBoards(this.props.userId)
    }

    constructor(props) {
        super(props);
        this.state = props.pin;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData();
        fd.append('pin[author_id]', this.state.author_id);
        fd.append('pin[title]', this.state.title);
        fd.append('pin[link_url]', this.state.link_url);
        fd.append('pin[photo]', this.state.photoFile);
        fd.append('pin[board_id]', this.state.board_id)
        this.props.action(fd);
        let path = `/`;
        this.props.history.push(path);
    }
 
    handleFile(e) {
        e.preventDefault();
        
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result,
                imageUrl: fileReader.result, imageFile: file
             });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }
    updateTitle(e) {
        this.setState({title: e.target.value});
    }

    updateLink(e) {
        this.setState({link_url: e.target.value})
    }

    render() {
        let boardNames = this.props.boards.map(board => {
            return board.title
        })

        let previewImg;
        if (this.state.imageFile) {
            previewImg = <img class="previewImg" src={`${this.state.imageUrl}`}/>
        } else {
            previewImg =(<div className="fileContainer">
                <input type="file" onChange={this.handleFile}></input>
            </div>)
        }

        
        return (
            <div>
            <GreetingContainer />
            <div className="pinFormContainer">
            <div className="containerContainer">
 
                <div className="formContainer">
                    <form id="createPinForm">
                    <div id="leftCreateForm">
                        {previewImg}
                    </div>

                    <div id="rightCreateForm">
                        <div id="rightTopCreateForm">
                        <div className="buttonsContainer">
                            <button onClick={this.handleSubmit}>Save!</button>
                        </div>
                        
                        <input
                            id="createTitle"
                            value={this.state.title}
                            type="text"
                            onChange={this.updateTitle.bind(this)}
                            placeholder="Add a title"
                                        />

                        <textarea
                            placeholder="Say more about this pin"></textarea>
                        </div>
                            <label>Link URL<br></br>
                            <input
                                value={this.state.link_url}
                                type="text"
                                onChange={this.updateLink.bind(this)}
                                placeholder="www.google.com"
                            /></label>
                        </div>  
                    
                    </form>
                    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Pin;