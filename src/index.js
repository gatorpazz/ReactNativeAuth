import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA8Mdkdc_RgynpDxc0kw2THsokXYScCaU0',
      authDomain: 'reactnativeauth-c3650.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-c3650.firebaseio.com',
      projectId: 'reactnativeauth-c3650',
      storageBucket: 'reactnativeauth-c3650.appspot.com',
      messagingSenderId: '894517053625'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
