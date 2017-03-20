import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Button, Text, Icon, FooterTab } from 'native-base';
import Foot from '../foot/Foot'
import JournalForm from '../journal/JournalForm'
import {loginStyles, loginFormStyles} from '../../assets/styles'


export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={loginStyles.title}>User is logged in</Text>
        <View style={loginFormStyles.button}>
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={loginFormStyles.buttonTxt}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
