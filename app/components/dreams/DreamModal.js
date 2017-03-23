
import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, KeyboardAvoidingView,  ListView, Image, TouchableOpacity, Text } from 'react-native';
import { homeStyles, listViewStyles, modalStyles } from '../../assets/styles';
import Modal from 'react-native-modalbox';

// Props =>  props.dream
export default (props) => {
    const date = new Date(props.dream.date)
    const locale = "en-us"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return (
        <View style={modalStyles.item}>
          <Text style={modalStyles.dateText}>{date.toLocaleString(locale, options)}</Text>
          <Text style={modalStyles.titleText}>{props.dream.title}</Text>
          <Text style={modalStyles.contentText}>{props.dream.content}</Text>
          <Text style={modalStyles.dreamTypeText}>{props.dream.dreamType}</Text>
        </View>
    )
};