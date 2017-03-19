import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Content, Button, Text, Icon, FooterTab } from 'native-base';
import Foot from '../foot/Foot'
import JournalForm from '../journal/JournalForm'

export default class Home extends Component {
    render() {
        return (
            <View>
                <JournalForm />

                    <Foot />
            </View>
            );
        }
    }
