import React from 'react';
import { View, Text, KeyboardAvoidingView, StatusBar, Image } from 'react-native';
import { homeStyles } from '../../assets/styles';
import JournalForm from '../journal/JournalForm';

export default class Dreams extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Add a Dream',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      // icon: ({ tintColor }) => (
      //   <Image
      //     source={require('./moon.png')}
      //   />
      // ),
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
        <JournalForm  />

      </KeyboardAvoidingView>
    )
  }
}
