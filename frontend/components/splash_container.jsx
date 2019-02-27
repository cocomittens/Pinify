import Splash from './splash'
import { connect } from 'react-redux';

const msp = state => {
    return {
        pins: [{id: 1, title: 'test pin', linkUrl: 'http://google.com'}]
    }
}

const mdp = dispatch => {
    return {
        
    }
}

export default connect(msp, null)(Splash);