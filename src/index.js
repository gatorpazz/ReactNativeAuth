import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA8Mdkdc_RgynpDxc0kw2THsokXYScCaU0',
      authDomain: 'reactnativeauth-c3650.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-c3650.firebaseio.com',
      projectId: 'reactnativeauth-c3650',
      storageBucket: 'reactnativeauth-c3650.appspot.com',
      messagingSenderId: '894517053625'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
