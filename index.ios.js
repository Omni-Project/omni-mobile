import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#242424'
  }
});

AppRegistry.registerComponent('DreamscapeMobile', () => DreamscapeMobile);
