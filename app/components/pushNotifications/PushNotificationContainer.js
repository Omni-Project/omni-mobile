import React, {Component} from 'react'
import {
  Picker,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import styles from '../../assets/styles'

export default class PushNotificationsContainer extends Component {
  constructor (){
    super()
    this.state = {
      hour: '08',
      minutes: '00',
      type: 'AM'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(field, value){
    this.setState({
      [field]: value
    })
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
    console.log(this.state)
    return(
      <View style={styles.backgroundView}>
        <View style={styles.pushNotificationsView}>
            <Text style={styles.appText}>Set a reminder for:</Text>
            <View style={styles.pushPickersView}>
              <View style={styles.timePickerView}>
                <Picker
                  style={styles.timePicker}
                  selectedValue={this.state.hour}
                  onValueChange={(val) => this.handleChange('hour', val)}>
                  { hourOptions.map(num => <Picker.Item style={styles.altAppText} label={num} value={num} key={`hour-${num}`}/>)}
                </Picker>
              </View>
              <View style={styles.timePickerView}>
                <Picker
                  style={styles.timePicker}
                  selectedValue={this.state.minutes}
                  onValueChange={(val) => this.handleChange('minutes', val)}>
                  { minOptions.map(num => <Picker.Item style={styles.altAppText} label={num} value={num} key={`min-${num}`}/>)}
                </Picker>
              </View>
              <View style={styles.timePickerView}>
                <Picker
                style={styles.timePicker}
                selectedValue={this.state.type}
                onValueChange={(val) => this.handleChange('type', val)}>
                { typeOptions.map(type => <Picker.Item style={styles.altAppText} label={type} value={type} key={type}/>)}
                </Picker>
              </View>
            </View>
            <TouchableOpacity style={styles.purpleButtonRounded}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
