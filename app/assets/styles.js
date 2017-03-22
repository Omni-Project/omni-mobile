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

export const landingPageStyles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#252525',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const journalStyles = StyleSheet.create({
  items: {
    marginBottom: 20
  },
  titleContainer: {
    marginBottom: 20,
    backgroundColor: '#3a3a3a',
    borderRadius: 3,
    paddingLeft: 15,
    height: 40
  },
  contentContainer: {
    marginBottom: 20,
    backgroundColor: '#3a3a3a',
    borderRadius: 3,
    padding: 15,
    minHeight: 120
  },
  titleInput: {
      color: "white",
      height: 40,
      fontSize: 15
  },
  contentInput: {
      color: "white",
      height: 120,
      fontSize: 15
  },
  headingText: {
      color: '#BD95AF',
      textAlign: 'left',
      marginBottom: 8,
      fontSize: 13
    },
    dateText: {
      color: '#fff'
    },
    dateInput: {
      borderRadius: 3,
      borderColor: "#3a3a3a",
      borderWidth: 2
    },
    typeInput: {
      borderRadius: 3,
      borderColor: "#3a3a3a",
      borderWidth: 2,
      width: 180,
      height: 40
    },
    dateIcon: {
      height: 0, width: 0
    },
    saveButton: {
      backgroundColor: '#BD95AF',
      width: '100%',
      borderRadius: 3,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
  }
});

export const footerStyles = StyleSheet.create({
  container: {
      width: '100%',
    alignItems: 'stretch',
  }
});

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent:'center'
  },
  title: {
      color: "#FFFFFF",
      marginTop: 10,
      width: 160,
      textAlign: 'center',
      opacity: 0.9
  }
});

export const loginFormStyles = StyleSheet.create({
  container: {
      padding: 20
  },
  helloContainer:{
      paddingHorizontal: 10,
      alignItems: 'center'
  },
  helloTxt: {
      paddingHorizontal: 10,
      textAlign: 'center',
      fontSize: 18,
      color: '#FFF',
      marginBottom: 10
  },
  input: {
      height: 30,
      backgroundColor: '#3A3A3A',
      marginBottom: 10,
      color: '#FFF',
      paddingHorizontal: 10
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  buttonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#BD95AF',
    paddingVertical:10,
    paddingHorizontal: 10,
    width: '100%'
  }

});


export const homeStyles = StyleSheet.create({
  textContainer: {
    padding: '10%',
    paddingBottom: '7%'
  },
  text: {
    color: '#b4d4ee',
    fontSize: 25,
    fontWeight: 'bold'
  }

})
