import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './app/components/login/Login'
import {landingPageStyles} from './app/assets/styles'

export default class DreamscapeMobile extends Component {
  render() {
    return (
      <View style={landingPageStyles.appContainer}>
        <Login />
      </View>
    );
  }
}


AppRegistry.registerComponent('DreamscapeMobile', () => DreamscapeMobile);
