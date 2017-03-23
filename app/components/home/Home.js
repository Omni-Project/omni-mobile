import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, Image } from 'react-native';
import { Content, Button, Text, Icon, FooterTab } from 'native-base';
import { TabNavigator } from 'react-navigation'
import Login from '../login/Login'
import JournalForm from '../journal/JournalForm'
import Settings from '../settings/Settings'
import AddDreams from '../dreams/AddDreams'
import AllDreams from '../dreams/AllDreams'
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
            <Text>Home!!!</Text>
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
    screen: AllDreams,
  },
  AddDreams: {
    screen: AddDreams,
  },
  Settings: {
    screen: Settings
  }
}, {
  tabBarOptions: {
    inactiveTintColor: 'white',
    activeTintColor: '#eda6e8',
    style: {
      backgroundColor: 'black',
    },
  },
});
