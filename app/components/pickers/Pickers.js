import React from 'react'
import DatePicker from 'react-native-datepicker'

export const TimePicker = function(props) {
  return (
    <DatePicker
      style={{width: 200}}
      date={props.time}
      mode="time"
      format="HH:mm"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      minuteInterval={10}
      onDateChange={(time) => props.handleTimeChange(time, props.field)}
      />
  )
}

export const DatePick = function(props) {

    return (
      <DatePicker
        style={{width: 200}}
        date={props.date}
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
        onDateChange={(date) => props.handleTimeChange(date, 'date')}
      />
    )
}
