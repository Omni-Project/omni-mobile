import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, Image, Text } from 'react-native';
import {loginStyles, loginFormStyles} from '../../assets/styles'
import {logout} from '../../reducers/auth'
import store from '../../store'

export default class Settings extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    //logging out
    store.dispatch(logout())
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
       <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
      {/*Make phone-related status bar light*/}
        <StatusBar barStyle='light-content' />

        <View style={loginStyles.logoContainer}>
            <Text>Settings page</Text>
        </View>

        <View>
         <View style={loginFormStyles.buttonContainer}>
          <View style={loginFormStyles.button}>
            <TouchableOpacity onPress={this.handleSubmit}>
              <Text>Log out</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
