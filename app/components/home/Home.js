import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Content, Button, Text, Icon, FooterTab } from 'native-base';
import Foot from '../foot/Foot'
import JournalForm from '../journal/JournalForm'
import {loginStyles, loginFormStyles} from '../../assets/styles'
import {logout} from '../../reducers/auth'
import store from '../../store'


export default class Home extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    //logging out
    store.dispatch(logout())
  }
  render() {
    return (
       <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
      {/*Make phone-related status bar light*/}
        <StatusBar
            barStyle='light-content'
        />
        <View style={loginStyles.logoContainer}>
            <Text>User is logged in</Text>
        </View>
        <View style={loginStyles.formContainer}>
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
