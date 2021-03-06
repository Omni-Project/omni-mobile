import React from 'react';
import { View, Text, KeyboardAvoidingView, StatusBar, Image } from 'react-native';
import { homeStyles } from '../../assets/styles';
import JournalForm from '../journal/JournalForm';
import store from '../../store';

export default class Dreams extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Add a Dream',
      icon: ({ tintColor }) => (
        <Image
          source={require('./plus.png')}
          style={{height: 25, width: 25}}
        />
      ),
    },
  }
    
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
      {/*Make phone-related status bar light*/}
        <StatusBar barStyle='light-content' />
        <View style={homeStyles.textContainer}>
          <Text style={homeStyles.text}>Add a Dream</Text>
        </View>
        <JournalForm />
      </KeyboardAvoidingView>
    )
  }
}
