import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './assets/styles'
import PushNotificationContainer from './components/PushNotificationContainer'
import Home from './app/components/home/Home';


export default class DreamscapeMobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

AppRegistry.registerComponent('DreamscapeMobile', () => PushNotificationContainer);
