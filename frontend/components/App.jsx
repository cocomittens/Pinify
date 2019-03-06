import React from 'react';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import SplashContainer from './splash/splash_container';
import EditProfileContainer from './profiles/edit_profile_container';
import CreatePinContainer from './pins/create_pin_container';
import EditPinContainer from './pins/edit_pin_container';
import UserProfileContainer from './profiles/user_profile_container';
import CreateBoardContainer from './boards/create_board_container';
import BoardShowContainer from './boards/board_show_container';
import PinShowContainer from './pins/pin_show_container';
import EditBoardContainer from './boards/edit_board_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom'


const App = () => (
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute exact path="/edit" component={EditProfileContainer} />
        <ProtectedRoute exact path="/pin/new" component={CreatePinContainer} />
        <ProtectedRoute path="/pin/:pinId/edit" component={EditPinContainer} />
        <ProtectedRoute path="/users/:username" component={UserProfileContainer} />
        <ProtectedRoute path="/board/new" component={CreateBoardContainer} />
        <ProtectedRoute path="/board/:boardId/edit" component={EditBoardContainer} />

        <ProtectedRoute path="/board/:boardId" component={BoardShowContainer} />
        <ProtectedRoute path="/pin/:pinId" component={PinShowContainer} />
        <Redirect to="/" />
    </Switch>
);

export default App;