import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	let store;
	if (window.currentUser) {
		let user = Object.values(window.currentUser)[0];
		const preloadedState = {
			session: { id: user.id, 
				username: user.username, 
				first_name: user.first_name,
				followers: user.followers
		}};
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}

	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.logout = () => dispatch(logout());
	ReactDOM.render(<Root store={store} />, root);
});
