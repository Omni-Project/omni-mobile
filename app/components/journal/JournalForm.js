import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  AlertIOS
} from 'react-native';
import { Button, Icon } from 'native-base';
import {Select, Option} from "react-native-chooser";
import { journalStyles, loginFormStyles } from '../../assets/styles';
import { TimePicker, DatePick } from '../pickers/Pickers'
import store from '../../store'
import { receiveJournalEntry } from '../../reducers/dreams'


const initialState = {
        title: '',
        content: '',
        dreamType: null,
        date: new Date(),
        timeStart: '22:00',
        timeEnd: '06:00',
        isPublic: false,
        user_id: 0
}
    
export default class JournalForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.onJournalSave = this.onJournalSave.bind(this);
    }
    handleTimeChange(v, field) { this.setState({[field]: v}) }

    onJournalSave() {
        let journalData = Object.assign({}, this.state);
        store.dispatch(receiveJournalEntry(journalData))
        AlertIOS.alert(
            `${this.state.title}`,
            'Your dream has been saved!'
        )
        this.setState(initialState);
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => this.setState({user_id: store.getState().auth.id}));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    

    render() {
 
        return (
        <KeyboardAvoidingView behavior="padding" >
        <View style={{flexGrow: 1, flexDirection: 'column',
      justifyContent:'flex-start',  paddingLeft: '10%', paddingRight: '10%'}}>


        {/*Date of Dream && Type*/}
        <View style={{flexDirection: 'row'}}>
            <View style={journalStyles.items}>
                <Text style={journalStyles.headingText}>Date</Text>
                <DatePick handleTimeChange={this.handleTimeChange} date={this.state.date} />
            </View>
            <View style={journalStyles.items}>
                <Text style={journalStyles.headingText}>Dream Type</Text>
            <Select
                onSelect={(dreamType) => this.setState({dreamType})}
                defaultText ="Select..."
                animationType="slide"
                style={journalStyles.typeInput}
                textStyle={{color: 'white'}}
                backdropStyle ={journalStyles.datePicker}
                optionListStyle={{backgroundColor: "#c0b4ca", height: 190, borderColor: '#c0b4ca', borderRadius: 3}}
                >
                {['Daydream', 'Lucid Dream', 'Nightmare', 'Normal Dream', 'Recurring Dream'].map((type, i) =>
                   <Option value={type} styleText={{color: '#252525'}} key={i}>{type}</Option>
                )}

            </Select>
            </View>
        </View>

        {/*Title*/}
        <View style={journalStyles.titleContainer}>

            <TextInput
                onChangeText={(title) => this.setState({title})}
                style={journalStyles.titleInput}
                placeholder="Title"
                placeholderTextColor='#BD95AF'
                returnKeyType= "done"
                autoCorrect={false}
                />
        </View>

        {/*Content*/}
        <View style={journalStyles.contentContainer}>
            <TextInput
                onChangeText={(content) => this.setState({content})}
                style={journalStyles.contentInput}
                placeholder="Dream Content"
                placeholderTextColor='#BD95AF'
                returnKeyType= "done"
                autoCorrect={false}
                multiline = {true}
                />
        </View>

        <View style={{flexDirection: 'row'}}>
            {/*Sleep Start*/}
            <View style={journalStyles.items}>
                <Text style={journalStyles.headingText}>Sleep Start Time</Text>
                <TimePicker handleTimeChange={this.handleTimeChange} time={this.state.timeStart} field="timeStart" />
            </View>

            {/*Sleep End*/}
            <View style={journalStyles.items}>
                <Text style={journalStyles.headingText}>Sleep End Time</Text>
                <TimePicker handleTimeChange={this.handleTimeChange} time={this.state.timeEnd} field="timeEnd" />
            </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        {/*Make public?*/}
            <Switch
            onValueChange={(value) => this.setState({isPublic: value})}
            style={{marginRight: 10}}
            onTintColor='#BD95AF'
            value={this.state.isPublic} />
            <Text style={journalStyles.headingText}>Make this public?</Text>
        </View>


        <View style={journalStyles.saveButton}>
            <Button onPress={this.onJournalSave} style={{ backgroundColor: '#BD95AF'}}>
                <Icon name="checkmark" />
                <Text style={loginFormStyles.buttonTxt}>Save</Text>
            </Button>
        </View>
        </View>

    </KeyboardAvoidingView>
    );
  }
}