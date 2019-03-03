import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    componentDidMount(){
        this.props.fetchBoards(this.props.id)
    }


    render() {
        let boards = (this.props.boards) ? this.props.boards : []; 
        
        return (
            <div id="userProfileContainer">
                <GreetingContainer />
                <h1>Welcome, {this.props.username}</h1>
                {boards.map(board => {
                    return board.title
                })}
            </div>
        )
    }
}

export default UserProfile;