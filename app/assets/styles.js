import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const journalStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-around'
  },
  input: {
      color: "black",
      marginTop: 5,
      textAlign: 'left',
      opacity: 0.9,
      fontSize: 15,
      height: 25,
    },
    buttons: {
        flexDirection: 'row'
    },
    editButton: {

    },
    tagButton: {
        alignItems: 'flex-end'
    }
});

export const footerStyles = StyleSheet.create({
  container: {
      width: '100%',
    alignItems: 'stretch',
  }
});

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent:'center'
  },
  title: {
      color: "#FFFFFF",
      marginTop: 10,
      width: 160,
      textAlign: 'center',
      opacity: 0.9
  }
});

export const loginFormStyles = StyleSheet.create({
  container: {
      padding: 20
  },
  helloContainer:{
      paddingHorizontal: 10,
      alignItems: 'center'
  },
  helloTxt: {
      paddingHorizontal: 10,
      textAlign: 'center',
      fontSize: 18,
      color: '#FFF',
      marginBottom: 10
  },
  input: {
      height: 30,
      backgroundColor: '#3A3A3A',
      marginBottom: 10,
      color: '#FFF',
      paddingHorizontal: 10
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  buttonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#BD95AF',
    paddingVertical:10,
    paddingHorizontal: 10,
    width: '100%'
  }

});
