import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        let user = Object.values(window.currentUser)[0];
        const preloadedState = {
            entities: {
                users: { [user.id]: user }
            },
            session: { id: user.id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store} />, root);
})