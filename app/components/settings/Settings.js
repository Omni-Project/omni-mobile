import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, Image, Text } from 'react-native';
import {loginStyles, loginFormStyles, homeStyles, settingStyles} from '../../assets/styles'
import {logout} from '../../reducers/auth'
import store from '../../store'

export default class Settings extends Component {
  constructor(){
    super();
    this.state = {
      user: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    //logging out
    store.dispatch(logout())
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState({user: store.getState().auth}));
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  static navigationOptions = {
    tabBar: {
      label: 'Settings',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Image
          source={require('./settings.png')}
          style={{height: 25, width: 25}}
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
          <View style={homeStyles.textContainer}>
            <Text style={homeStyles.text}>Settings</Text>
          </View>

          <View style={settingStyles.imageContainer}>
            <Image style={settingStyles.image} source={{uri: 'https://placehold.it/100x100'}}/>
          </View>

          <View style={settingStyles.textContainer}>
            <Text style={settingStyles.labels}>Name:</Text>
            <Text style={settingStyles.text}>{this.state.user.name}</Text>
            <Text style={settingStyles.labels}>Email:</Text>
            <Text style={settingStyles.text}>{this.state.user.email}</Text>
            <Text style={settingStyles.changeTxt}>To change your settings, please go to the website! </Text>
          </View>


        <View>
         <View style={settingStyles.buttonContainer}>
          <View style={settingStyles.button}>
            <TouchableOpacity onPress={this.handleSubmit}>
              <Text style={settingStyles.buttonTxt}><Image style={{height: 20, width: 20, paddingTop: 25}} source={require('./logout.png')}/>{'  '}Log out</Text>

          </TouchableOpacity>
          </View>
        </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
