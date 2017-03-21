import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export const TimePicker = class TimePicker extends Component {
  constructor(props){
    super(props)
    this.state = {time:"12:00"}
  }

  render(){
    return (
      <DatePicker
          style={{width: 200}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({time: time});}}
        />
    )
  }
}

export const DatePick = class DatePick extends Component {
  constructor(props){
    super(props)
    this.state = {time:"12:00"}
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}
