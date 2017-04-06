import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Periodicos from './componentes/Periodicos';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCqKnOB1gh7D0veA6mUvp4-UxZpXXXh7M0',
            authDomain: 'ahorros-40f74.firebaseapp.com',
            databaseURL: 'https://ahorros-40f74.firebaseio.com',
            projectId: 'ahorros-40f74',
            storageBucket: 'ahorros-40f74.appspot.com',
            messagingSenderId: '159044860'
        });
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Periodicos />
            </Provider>
        );
    }
}

export default App;
