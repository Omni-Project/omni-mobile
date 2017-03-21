import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import styles from './app/assets/styles'
import PushNotificationContainer from './app/components/pushNotifications/PushNotificationContainer'
import Home from './app/components/home/Home';
import Login from './app/components/login/Login'
import {landingPageStyles} from './app/assets/styles'
import store from './app/store'


import { TabNavigator } from 'react-navigation';


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
  static navigationOptions = {
    tabBar: {
      label: 'Home',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Text>sgds</Text>
      ),
    },
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={landingPageStyles.appContainer}>
        { this.state ? <Home /> : <Login />
      }



      </View>
    )
  }
}

const MyApp = TabNavigator({
  Home: {
    screen: DreamscapeMobile,
  },
  Notifications: {
    screen: Login,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});




AppRegistry.registerComponent('DreamscapeMobile', () => MyApp);

