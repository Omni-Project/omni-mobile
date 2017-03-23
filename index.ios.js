import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Home from './app/components/home/Home';
import Login from './app/components/login/Login'
import {landingPageStyles} from './app/assets/styles'
import store from './app/store'




export default class DreamscapeMobile extends Component {
  constructor(){
    super()
    this.state = {user: store.getState().auth}
  }
  componentDidMount(){
    //setting this up so it updates when user is set and re-renders proper view
    this.unsubscribe = store.subscribe(()=>{
      const newState = store.getState().auth
      this.setState({user: newState})
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    return (
      <View style={landingPageStyles.appContainer}>
        { this.state.user ? <Home /> : <Login /> }
      </View>
    )
  }
}






AppRegistry.registerComponent('DreamscapeMobile', () => DreamscapeMobile);

