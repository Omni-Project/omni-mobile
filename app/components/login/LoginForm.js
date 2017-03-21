import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import axios from 'axios'
import { loginFormStyles } from '../../assets/styles';
import store from '../../store'
import {login, getUser } from '../../reducers/auth'


export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'Email',
      password: 'Password',
      loginError: null
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field,text){
    this.setState({
      [field]: text
    })
  }
  handleSubmit(){
    const email = this.state.email
    const password = this.state.password
    if(!password) {
      this.setState({loginError: 'Please enter a password'})
    } else if(!email) {
      this.setState({loginError: 'Please enter an email'})
    } else {
      store.dispatch(login(email, password))
    }
    console.log('user', store.getState().auth)
  }

  render() {
    return (
      <View style={loginFormStyles.container}>
       {this.state.loginError && <TextInput>{this.state.loginError}</TextInput>}
        <TextInput
            style={loginFormStyles.input}
            value={this.state.email}
            placeholderTextColor='#ffffff'
            returnKeyType= "next"
            autoCorrect={false}
            selectTextOnFocus={true}
            onChangeText={(text) => this.handleChange('email', text)}
        />
        <TextInput
            style={loginFormStyles.input}
            value={this.state.password}
            placeholderTextColor='#ffffff'
            returnKeyType= "done"
            autoCorrect={false}
            secureTextEntry={true}
            selectTextOnFocus={true}
            onChangeText={(text) => this.handleChange('password', text)}
        />
        <View style={loginFormStyles.buttonContainer}>
          <View style={loginFormStyles.button}>
            <TouchableOpacity onPress={this.handleSubmit}>
              <Text style={loginFormStyles.buttonTxt}>Login</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
