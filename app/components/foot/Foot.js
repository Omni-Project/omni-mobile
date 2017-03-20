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
                  {/*EI: map over an array to create this JSX */}
                    ['moon', 'home', 'stats', 'settings'].map(name =>
                      <Button transparent iconCenter>
                          <Icon name={name} />
                      </Button>
                    )
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
