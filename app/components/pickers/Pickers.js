import React from 'react'
import DatePicker from 'react-native-datepicker'
import { journalStyles } from '../../assets/styles';

const customStyles = {
    dateText: journalStyles.dateText,
    dateInput: journalStyles.dateInput,
    dateIcon: journalStyles.dateIcon,
    datePicker: journalStyles.datePicker,
    datePickerCon: journalStyles.datePicker,
    btnTextConfirm: {color: '#764899'},
    btnTextCancel: {color: '#3a3a3a'}
}

export const TimePicker = function(props) {
  return (
    <DatePicker
      style={{width: 154}}
      customStyles={customStyles}
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
        style={{width: 120}}
        customStyles={customStyles}
        date={props.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => props.handleTimeChange(date, 'date')}
      />
    )
}
