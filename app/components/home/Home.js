import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Content, Button, Text, Icon, FooterTab } from 'native-base';
import Foot from '../foot/Foot'
import JournalForm from '../journal/JournalForm'
import Login from '../login/Login'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Login />
            </View>
            );
        }
    }
