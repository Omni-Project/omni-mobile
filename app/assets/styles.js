import {StyleSheet} from'react-native'

export default StyleSheet.create({
  backgroundView: {
    backgroundColor: '#212121',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  drawerComponent:{
    backgroundColor: '#3a3a3a'
  },
  appText: {
    color: '#eaeaea'
  },
  altAppText: {
    color: '#ffffff'
  },
  textView: {
    flex: 1
  },
  pushNotificationsView: {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timePickerView:{
    flex: 1 //NEEDED TO FIX BUG
  },
  timePicker: {
    height: '50%',
    backgroundColor: '#212121'
  },
  pushPickersView: {
    flex: 1, // NEEDED TO FIX BUG
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  }
})
