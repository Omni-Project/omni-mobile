
import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, KeyboardAvoidingView,  ListView, Image, TouchableOpacity, Text } from 'react-native';
import { homeStyles, listViewStyles } from '../../assets/styles';
import Modal from 'react-native-modalbox';

// Props =>  props.dream
export default (props) => {
    console.log('PROPS', props)
    return (
        <View style={listViewStyles.item}>
          <Text style={listViewStyles.dateText}>{props.dream.date}</Text>
          <Text style={listViewStyles.titleText}>{props.dream.title}</Text>
          <Text style={listViewStyles.contentText}>{props.dream.content}</Text>
          <Text style={listViewStyles.dreamTypeText}>{props.dream.dreamRtpe}</Text>
        </View>
    )
};