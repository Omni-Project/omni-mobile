import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Content, Card, CardItem, Left, Body, Button, Icon, Container } from 'native-base';
import {Select, Option} from "react-native-chooser";
import { journalStyles } from '../../assets/styles';
import { TimePicker, DatePick } from '../pickers/Pickers'
import Switch from '../switch/Switch'

export default class JournalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {
        return (
      <KeyboardAvoidingView behavior="padding" >

      <View>
        <Text style={journalStyles.text}>Dream Date</Text>
        <DatePick />
      </View>

      <View style={journalStyles.container}>
        <TextInput
            onChangeText={(text) => this.setState({text})}
            style={journalStyles.text}
            placeholder="Title"
            returnKeyType= "done"
            autoCorrect={false}
            />
        </View>

        <View style={journalStyles.container}>
        <TextInput
            onChangeText={(text) => this.setState({text})}
            style={journalStyles.text}
            placeholder="Dream Content"
            returnKeyType= "done"
            autoCorrect={false}
            />
        </View>



        <View>
            <Text style={journalStyles.text}>Type of Dream</Text>

            <Select
                onSelect={this.onSelect}
                defaultText ="Select type of dream..."
                textStyle={journalStyles.text}
                backdropStyle ={{backgroundColor : "#9cd19d"}}
                optionListStyle={{backgroundColor : "#F5FCFF", height: 100}}
                >
                  <Option value="Daydream">Daydream</Option>
                  <Option value="Lucid Dream">Lucid Dream</Option>
                  <Option value="Nightmare">Nightmare</Option>
                  <Option value="Normal Dream">Normal Dream</Option>
                  <Option value="Recurring Dream">Recurring Dream</Option>
            </Select>
        </View>

          <View>
            <Text style={journalStyles.text}>Sleep Start Time</Text>
            <TimePicker />
         </View>

         <View>
            <Text style={journalStyles.text}>Sleep End Time</Text>
            <TimePicker />
         </View>

         <View>
            <Text style={journalStyles.text}>Make this public?</Text>
            <Switch />
         </View>

        <View >
            <Button small rounded success>
                <Icon name="checkmark" />
                <Text style={journalStyles.saveButton}>Save</Text>
            </Button>
        </View>


        </KeyboardAvoidingView>
        );
    }
}



// <Content>
//     <Card>
//         <CardItem bordered>
//             <Left>
//                 <Body>
//                     <TextInput placeholder='Dream Title'/>
//                     <Text note>April 15, 2016</Text>
//                 </Body>
//             </Left>
//         </CardItem>

//         <CardItem>
//             <Body>
//             <TextInput placeholder='Write about your dream here'/>

//                 <View >
//                     <View >
//                     <Button transparent textStyle={{color: '#87838B'}}>
//                         <Icon name="create" />
//                         <Text>Edit</Text>
//                     </Button>
//                     </View>

//                     <View >
//                     <Button transparent textStyle={{color: '#87838B'}}>
//                         <Icon name="pricetags" />
//                         <Text>Tags</Text>
//                     </Button>
//                     </View>
//                 </View>


//             </Body>
//         </CardItem>
//     </Card>
// </Content>
