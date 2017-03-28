import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  AlertIOS, ScrollView
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
        this.state = Object.assign({}, initialState)
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
        this.setState(Object.assign({}, initialState));
        this.dreamTypeSelect.setSelectedText("Select..")
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => this.setState({user_id: store.getState().auth.id}));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }



    render() {

        return (

        <View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={{height: 500}}>

        <View style={{flexGrow: 1, flexDirection: 'column',
            justifyContent:'flex-start',  paddingLeft: '10%', paddingRight: '10%', marginBottom: '5%'}}>

        {/*Date of Dream && Type*/}
        <View style={{flexDirection: 'row'}}>
            <View style={journalStyles.items}>
                <Text style={journalStyles.headingText}>Date</Text>
                <DatePick handleTimeChange={this.handleTimeChange} date={this.state.date} />
            </View>
            <View style={journalStyles.items}>
                <Text style={journalStyles.headingText}>Dream Type</Text>
            <Select
                ref={(select) => { this.dreamTypeSelect = select; }}
                onSelect={(dreamType) => this.setState({dreamType})}
                animationType="slide"
                style={journalStyles.typeInput}
                textStyle={journalStyles.dateText}
                backdropStyle ={journalStyles.datePicker}
                optionListStyle={{backgroundColor: "#c0b4ca", height: 190, borderColor: '#c0b4ca', borderRadius: 3}}
                >
                {['Daydream', 'Lucid Dream', 'Nightmare', 'Normal Dream', 'Recurring Dream'].map((type, i) =>
                   <Option value={type} styleText={{color: '#252525', fontSize: 15}} key={i}>{type}</Option>
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
                value={this.state.title}
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
                value={this.state.content}
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

        {/*Make public?*/}
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <Switch
            onValueChange={(value) => this.setState({isPublic: value})}
            style={{marginRight: 10}}
            onTintColor='#BD95AF'
            value={this.state.isPublic} />
            <Text style={journalStyles.headingText}>Make this public?</Text>
        </View>

        {/* Save button */}
        <View style={journalStyles.saveButton}>
            <Button onPress={this.onJournalSave} style={{ backgroundColor: '#BD95AF'}}>
                <Icon name="checkmark" />
                <Text style={journalStyles.btnText}>Save</Text>
            </Button>
        </View>

     </View>
</ScrollView>
        </View>


    );
  }
}
