import React from 'react';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import SplashContainer from './splash/splash_container';
import EditProfileContainer from './profiles/edit_profile_container';
import PinContainer from './pins/pin_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom'


const App = () => (
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute exact path="/edit" component={EditProfileContainer} />
        {/* <ProtectedRoute path="/:username" component={UserProfileContainer} /> */}
        <ProtectedRoute exact path="/pin/new" component={PinContainer} />
        <Redirect to="/" />
    </Switch>
);

export default App;