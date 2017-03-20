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
import { Container, Content, Button, Icon, Footer } from 'native-base';

export default class Foot extends Component {
    render() {
        return (
                <View style={styles.container}>
                <Footer>
                    <Button transparent iconCenter>
                        <Icon name='moon' />
                    </Button>

                    <Button transparent iconCenter>
                        <Icon name='home' />
                    </Button>

                    <Button transparent iconCenter>
                        <Icon name='stats' />
                    </Button>

                    <Button transparent iconCenter>
                        <Icon name='settings' />
                    </Button>
                </Footer>
                </View>
            );
        }
    }



const styles = StyleSheet.create({
  container: {
      width: '100%',
    alignItems: 'stretch',
  }
});