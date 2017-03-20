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
  biggerAppText: {
    color: '#eaeaea',
    fontSize: 20
  },
  altAppText: {
    color: '#ffffff'
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20
  },
  pushNotificationsView: {
    height: 400,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timePickerView:{
    flex: 1 //NEEDED TO FIX BUG
  },
  timePicker: {
    backgroundColor: '#212121'
  },
  pushPickersView: {
    flex: 1, // NEEDED TO FIX BUG
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  purpleButtonRounded: {
   backgroundColor: '#BD95AF',
   paddingVertical:10,
   paddingHorizontal: 10,
   width: '50%',
   borderRadius: 10
 }
})
