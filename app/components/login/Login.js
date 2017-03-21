import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, StatusBar } from 'react-native';
import { loginStyles } from '../../assets/styles';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
      <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
      {/*Make phone-related status bar light*/}
        <StatusBar
            barStyle='light-content'
        />
        <View style={loginStyles.logoContainer}>
        {/*Temporary image to be replaced later*/}
            <Image
            source={require('../../assets/logo.jpg')}
            style={{height:100, width: 300, marginBottom: 10}}
            />
            <Text style={loginStyles.title}>An app made for fellow dreamers to track their dreams</Text>
        </View>
        <View style={loginStyles.formContainer}>
        <LoginForm />
        </View>
      </KeyboardAvoidingView>
            );
        }
    }
