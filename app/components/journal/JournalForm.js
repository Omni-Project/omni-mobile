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

export default class JournalForm extends Component {
    render() {
        return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <Content>
                    <Card>
                        <CardItem bordered>
                            <Left>
                                <Body>
                                  <TextInput style={styles.input} placeholder='Dream Title'/>
                                  <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                            <TextInput style={styles.input} placeholder='Write about your dream here'/>
                                
                                <View style={styles.buttons}>
                                    <View style={styles.editButton}>
                                    <Button transparent textStyle={{color: '#87838B'}}>
                                        <Icon name="create" />
                                        <Text>Edit</Text>
                                    </Button>
                                    </View>
                                
                                    <View style={styles.tagButton}>
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

const styles = StyleSheet.create({
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