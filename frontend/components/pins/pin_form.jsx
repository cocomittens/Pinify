import React from 'react';
import GreetingContainer from '../header/greeting_container';

class Pin extends React.Component {
    componentWillMount() {
        this.props.fetchBoards(this.props.userId)
    }

    constructor(props) {
        super(props);
        this.state = {pin: props.pin, showBoardList: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData();
        fd.append('pin[author_id]', this.state.pin.author_id);
        fd.append('pin[title]', this.state.pin.title);
        fd.append('pin[link_url]', this.state.pin.link_url);
        fd.append('pin[photo]', this.state.pin.photoFile);
        fd.append('pin[board_id]', this.state.pin.board_id)
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

    toggleBoardList() {
        let status = !this.state.showBoardList;
        this.setState({showBoardList: status})
        
    }

    render() {
        let boardNames = (
        <ul>
        {this.props.boards.map(board => {
            return <li>{board.title}</li>
        })}
            </ul>)
        

        let previewImg;
        if (this.state.pinimageFile) {
            previewImg = <img className="previewImg" src={`${this.state.pinimageUrl}`}/>
        } else {
            previewImg =(<div className="fileContainer">
                <input type="file" onChange={this.handleFile}></input>
            </div>)
        }

        let pinForm = (
            

                <div id="rightCreateForm">
                    <div id="rightTopCreateForm">
                        <div className="buttonsContainer">
                            <button onClick={this.handleSubmit}>Save</button>
                        </div>

                        <input
                            id="createTitle"
                            value={this.state.pin.title}
                            type="text"
                            onChange={this.updateTitle.bind(this)}
                            placeholder="Add a title"
                        />

                        <textarea
                            placeholder="Say more about this pin"></textarea>
                    </div>
                    <div>

                        <input
                            value={this.state.pin.link_url}
                            type="text"
                            onChange={this.updateLink.bind(this)}
                            placeholder="Add the URL this pin links to"
                        />
                        <input
                            className="chooseBoard"
                            type="text"
                            onClick={this.toggleBoardList.bind(this)}
                            placeholder="Choose a board (required)"
                        />
                    </div>  </div>

          
        )

        let content = (this.state.showBoardList) ? boardNames : pinForm
        
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
                    {content}
                            </form>  </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Pin;