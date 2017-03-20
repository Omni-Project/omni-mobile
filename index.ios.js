/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './assets/styles'
import PushNotificationContainer from './components/PushNotificationContainer'

export default class DreamscapeMobile extends Component {
  render() {
    return (
      <View style={styles.backgroundView}>
        <Text style={styles.appText}>
          Landing Page
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('DreamscapeMobile', () => PushNotificationContainer);
