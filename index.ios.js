import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './app/components/login/Login'
import Home from './app/components/home/Home'
import {landingPageStyles} from './app/assets/styles'
import store from './app/store'

export default class DreamscapeMobile extends Component {
  constructor(){
    super()
    this.state = store.getState().auth
  }
  componentDidMount(){
    //setting this up so it updates when user is set and re-renders proper view
    this.unsubscribe = store.subscribe(()=>{
      this.setState(store.getState().auth)
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  render() {
    return (
      <View style={landingPageStyles.appContainer}>
        { this.state? <Home /> : <Login />}
      </View>
    );
  }
}


AppRegistry.registerComponent('DreamscapeMobile', () => DreamscapeMobile);
