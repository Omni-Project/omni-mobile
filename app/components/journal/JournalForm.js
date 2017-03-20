import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { Content, Card, CardItem, Left, Body, Button, Icon } from 'native-base';
import { journalStyles } from '../../assets/styles';

export default class JournalForm extends Component {
    render() {
        return (
      <KeyboardAvoidingView behavior="padding" style={journalStyles.container}>

                <Content>
                    <Card>
                        <CardItem bordered>
                            <Left>
                                <Body>
                                  <TextInput style={journalStyles.input} placeholder='Dream Title'/>
                                  <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                            <TextInput style={journalStyles.input} placeholder='Write about your dream here'/>
                                
                                <View style={journalStyles.buttons}>
                                    <View style={journalStyles.editButton}>
                                    <Button transparent textStyle={{color: '#87838B'}}>
                                        <Icon name="create" />
                                        <Text>Edit</Text>
                                    </Button>
                                    </View>
                                
                                    <View style={journalStyles.tagButton}>
                                    <Button transparent textStyle={{color: '#87838B'}}>
                                        <Icon name="pricetags" />
                                        <Text>Tags</Text>
                                    </Button>
                                    </View>
                                </View>


                            </Body>
                        </CardItem>
                   </Card>
                </Content>

      </KeyboardAvoidingView>
        );
    }
}
