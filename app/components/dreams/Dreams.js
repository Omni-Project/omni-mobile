import React from 'react';
import { View, Text, KeyboardAvoidingView, StatusBar } from 'react-native';
import { homeStyles } from '../../assets/styles';
import JournalForm from '../journal/JournalForm';

export default function() {

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
