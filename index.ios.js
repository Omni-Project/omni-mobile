import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import styles from './app/assets/styles'
import PushNotificationContainer from './app/components/pushNotifications/PushNotificationContainer'
import Home from './app/components/home/Home';
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

