import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from 'react-native';
import { loginFormStyles } from '../../assets/styles';


export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

  }

  render() {
    // console.log('state in render', this.state, 'props in render', this.props);
    return (
      <View style={loginFormStyles.container}>
        <StatusBar
            barStyle='light-content'
        />

        <TextInput
            style={loginFormStyles.input}
            placeholder="Email"
            placeholderTextColor='#ffffff'
            returnKeyType= "go"
            autoCorrect={false}
        />

        <TextInput
            style={loginFormStyles.input}
            placeholder="Password"
            placeholderTextColor='#ffffff'
            returnKeyType= "go"
            autoCorrect={false}
        />

        <View style={loginFormStyles.buttonContainer}>

          <View style={loginFormStyles.button}>
            <TouchableOpacity>
              <Text style={loginFormStyles.buttonTxt}>Login</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}