import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, StatusBar } from 'react-native';
import { homeStyles } from '../../assets/styles';
import JournalForm from '../journal/JournalForm';

export default class Dreams extends Component {
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
            );
        }
    }
