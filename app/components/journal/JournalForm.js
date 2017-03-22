import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Switch
} from 'react-native';
import { Content, Card, CardItem, Left, Body, Button, Icon, Container } from 'native-base';
import {Select, Option} from "react-native-chooser";
import { journalStyles } from '../../assets/styles';
import { TimePicker, DatePick } from '../pickers/Pickers'
import store from '../../store'
import { receiveJournalEntry } from '../../reducers/dreams'

export default class JournalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            dreamType: null,
            date: '2017-04-01',
            timeStart: '22:00',
            timeEnd: '06:00',
            isPublic: false
    }
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.onJournalSave = this.onJournalSave.bind(this);
    }
    handleTimeChange(v, field) { this.setState({[field]: v}) }

    onJournalSave() {
        let journalData = Object.assign({}, this.state);
        store.dispatch(receiveJournalEntry(journalData))
    }

    render() {
        return (
        <KeyboardAvoidingView behavior="padding" >

        {/*Date of Dream*/}
        <View>
            <Text style={journalStyles.text}>Dream Date</Text>
            <DatePick handleTimeChange={this.handleTimeChange} date={this.state.date} />
        </View>

        {/*Title*/}
        <View style={journalStyles.container}>
            <TextInput
                onChangeText={(title) => this.setState({title})}
                style={journalStyles.text}
                placeholder="Title"
                returnKeyType= "done"
                autoCorrect={false}
                />
        </View>

        {/*Content*/}
        <View style={journalStyles.container}>
            <TextInput
                onChangeText={(content) => this.setState({content})}
                style={journalStyles.text}
                placeholder="Dream Content"
                returnKeyType= "done"
                autoCorrect={false}
                />
        </View>


        {/*Dream Type*/}
        <View>
            <Text style={journalStyles.text}>Type of Dream</Text>
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

        {/*Sleep Start*/}
        <View>
            <Text style={journalStyles.text}>Sleep Start Time</Text>
            <TimePicker handleTimeChange={this.handleTimeChange} time={this.state.timeStart} field="timeStart" />
        </View>

        {/*Sleep End*/}
        <View>
            <Text style={journalStyles.text}>Sleep End Time</Text>
            <TimePicker handleTimeChange={this.handleTimeChange} time={this.state.timeEnd} field="timeEnd" />
        </View>

        {/*Make public?*/}
        <View>
            <Text style={journalStyles.text}>Make this public?</Text>
            <Switch
            onValueChange={(value) => this.setState({isPublic: value})}
            style={{marginBottom: 10}}
            value={this.state.isPublic} />
        </View>

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
