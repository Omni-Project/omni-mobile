import React, {Component} from 'react'
import {
  Picker,
  Text,
  View,
  TouchableOpacity,
  AppState
} from 'react-native'
import styles from '../../assets/styles'
import PushController from './PushController'
import PushNotification from 'react-native-push-notification'

export default class PushNotificationsContainer extends Component {
  constructor (){
    super()
    this.state = {
      hour: '08',
      minutes: '00',
      type: 'AM'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, value){
    this.setState({
      [field]: value
    })
  }
  handleSubmit(){
    //cancel any existing notifications with an old time
    PushNotification.cancelAllLocalNotifications()
    //loop needed since repeating notifications not available yet.
    //This is why we cancel all local notifications at the start.
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth();
    const yyyy = today.getFullYear();
    const hour = this.state.type === 'PM'? (+this.state.hour) + 12 : +this.state.hour
    const min = +this.state.minutes
    //schedules notifications for an entire year
    for(let i=1;i<365;i++){
      PushNotification.localNotificationSchedule({
        message: "Be sure to log your dream today!", // (required)
        date: new Date(yyyy,mm,(dd+i),hour,min,0) // in 60 secs
      });
    }
  }
  makeHours(){
    const hoursArray=[]
    for(let i=0; i < 13; i++){
      if(i<10){
        hoursArray.push(`0${i}`)
      }else {
        hoursArray.push(`${i}`)
      }
    }
    return hoursArray
  }
  makeMins(){
    const minsArray=[]
    for(let i=0; i < 60; i++){
      if(i<10){
        minsArray.push(`0${i}`)
      }else {
        minsArray.push(`${i}`)
      }
    }
    return minsArray
  }

  render(){
    const typeOptions=['AM','PM']
    const hourOptions = this.makeHours()
    const minOptions = this.makeMins()
    return(
      <View style={styles.backgroundView}>
        <View style={styles.pushNotificationsView}>
            <Text style={styles.biggerAppText}>Set a daily reminder for:</Text>
            <View style={styles.pushPickersView}>
              <View style={styles.timePickerView}>
                <Picker
                  style={styles.timePicker}
                  itemStyle={styles.altAppText}
                  selectedValue={this.state.hour}
                  onValueChange={(val) => this.handleChange('hour', val)}>
                  { hourOptions.map(num => <Picker.Item label={num} value={num} key={`hour-${num}`}/>)}
                </Picker>
              </View>
              <View style={styles.timePickerView}>
                <Picker
                  style={styles.timePicker}
                  itemStyle={styles.altAppText}
                  selectedValue={this.state.minutes}
                  onValueChange={(val) => this.handleChange('minutes', val)}>
                  { minOptions.map(num => <Picker.Item style={styles.altAppText} label={num} value={num} key={`min-${num}`}/>)}
                </Picker>
              </View>
              <View style={styles.timePickerView}>
                <Picker
                style={styles.timePicker}
                itemStyle={styles.altAppText}
                selectedValue={this.state.type}
                onValueChange={(val) => this.handleChange('type', val)}>
                { typeOptions.map(type => <Picker.Item style={styles.altAppText} label={type} value={type} key={type}/>)}
                </Picker>
              </View>
            </View>
            <TouchableOpacity style={styles.purpleButtonRounded} onPress={this.handleSubmit}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
        </View>
        <PushController />
      </View>
    )
  }
}
