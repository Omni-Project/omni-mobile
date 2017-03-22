import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, Image } from 'react-native';
import { Content, Button, Text, Icon, FooterTab } from 'native-base';
import { TabNavigator } from 'react-navigation'

import Foot from '../foot/Foot'
import Login from '../login/Login'
import JournalForm from '../journal/JournalForm'
import Dreams from '../dreams/Dreams'
import {loginStyles, loginFormStyles} from '../../assets/styles'

import {logout} from '../../reducers/auth'
import store from '../../store'




class Home extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    //logging out
    store.dispatch(logout())
  }

  static navigationOptions = {
    tabBar: {
      label: 'Home',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Image
          source={require('./home.png')}
        />
      ),
    },
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
       <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
      {/*Make phone-related status bar light*/}
        <StatusBar barStyle='light-content' />

        <View style={loginStyles.logoContainer}>
            <Text>User is logged in</Text>
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


export default MyApp = TabNavigator({
  Home: {
    screen: Home,
  },
  Dreams: {
    screen: Dreams,
  },
  Logout: {
    screen: Login
  }
}, {
  tabBarOptions: {
    inactiveTintColor: 'white',
    activeTintColor: '#BD95AF',
    style: {
      backgroundColor: 'black',
    },
  },
});
