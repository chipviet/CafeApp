import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

// import {Provider} from 'react-redux';
// import configureStore from './app/stores/store'

import Home from './app/containers/Home/home'

//const store = configureStore()

 class App extends Component {
  render() {
    return (
      <Home></Home>
    );
  }
}

export default App;
