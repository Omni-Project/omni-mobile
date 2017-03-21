import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export const TimePickerStart = class TimePicker extends Component {

  render(){
    return (
      <DatePicker
          style={{width: 200}}
          date={this.props.timeStart}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => this.props.handleTimeChange(time, 'timeStart')}
        />
    )
  }
}


export const TimePickerEnd = class TimePicker extends Component {

  render(){
    return (
      <DatePicker
          style={{width: 200}}
          date={this.props.timeEnd}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => this.props.handleTimeChange(time, 'timeEnd')}
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
        date={this.props.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
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
        onDateChange={(date) => this.props.handleTimeChange(date, 'date')}
      />
    )
  }
}
