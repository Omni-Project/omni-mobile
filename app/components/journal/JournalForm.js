import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Switch
} from 'react-native';
import { Content, Card, CardItem, Left, Body, Button, Icon, Container } from 'native-base';
import {Select, Option} from "react-native-chooser";
import { journalStyles } from '../../assets/styles';
import { TimePickerEnd, TimePickerStart, DatePick } from '../pickers/Pickers'
import store from '../../store'
import { receiveJournalEntry } from '../../reducers/dreams'

export default class JournalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            dreamType: null,
            date: null,
            timeStart: null,
            timeEnd: null,
            isPublic: false
    }
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.onJournalSave = this.onJournalSave.bind(this);
}
  handleTimeChange (v, field) {
    this.setState({[field]: v})
    console.log(field, v);
  }

  onJournalSave() {
    let journalData = Object.assign({}, this.state);
    // console.log('journalData', journalData);
    // this.props.onJournalSave(journalData);
    store.dispatch(receiveJournalEntry(journalData))
}

    render() {
        return (
      <KeyboardAvoidingView behavior="padding" >
{/*This is where User selects in Date of Dream*/}
      <View>
        <Text style={journalStyles.text}>Dream Date</Text>
        <DatePick handleTimeChange={this.handleTimeChange} date={this.state.date} />
      </View>
{/*This is where User writes in Title of their Dream*/}
      <View style={journalStyles.container}>
        <TextInput
            onChangeText={(title) => this.setState({title})}
            style={journalStyles.text}
            placeholder="Title"
            returnKeyType= "done"
            autoCorrect={false}
            />
        </View>
{/*This is where User writes in Content of their Dream*/}
        <View style={journalStyles.container}>
        <TextInput
            onChangeText={(content) => this.setState({content})}
            style={journalStyles.text}
            placeholder="Dream Content"
            returnKeyType= "done"
            autoCorrect={false}
            />
        </View>



        <View>
            <Text style={journalStyles.text}>Type of Dream</Text>
{/*This is where User selects in Dream Type*/}
            <Select
                onSelect={(dreamType) => this.setState({dreamType})}
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
{/*This is where User selects in Sleep Start*/}
          <View>
            <Text style={journalStyles.text}>Sleep Start Time</Text>
            <TimePickerStart handleTimeChange={this.handleTimeChange} timeStart={this.state.timeStart} />
         </View>
{/*This is where User selects in Sleep End*/}
         <View>
            <Text style={journalStyles.text}>Sleep End Time</Text>
            <TimePickerEnd handleTimeChange={this.handleTimeChange} timeEnd={this.state.timeEnd} />
         </View>
         <View>
            <Text style={journalStyles.text}>Make this public?</Text>
            <Switch
            onValueChange={(value) => this.setState({isPublic: value})}
            style={{marginBottom: 10}}
            value={this.state.isPublic} />
         </View>

{/*This is where User selects their privacy option (default is false)*/}
        <View >
            <Button small rounded success onPress={this.onJournalSave}>
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
