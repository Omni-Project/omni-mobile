import {StyleSheet} from 'react-native'

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
    minHeight: 180
  },
  titleInput: {
      color: "white",
      height: 40,
      fontSize: 20
  },
  contentInput: {
      color: "white",
      height: 180,
      fontSize: 20
  },
  headingText: {
      color: '#BD95AF',
      textAlign: 'left',
      marginBottom: 8,
      fontSize: 15
    },
    dateText: {
      color: '#fff',
      fontSize: 15
    },
    btnText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: '700'
    },
    dateInput: {
      borderRadius: 3,
      borderColor: "#3a3a3a",
      borderWidth: 2
    },
    datePicker: {
      backgroundColor: '#c0b4ca'
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
    paddingBottom: '7%',
  },
  analyticsContainer: {
    padding: '10%',
    paddingBottom: '7%',
    backgroundColor: '#353535',
    justifyContent: 'center',
    alignItems: 'center'
  },
  analyticsContainer2: {
    padding: '10%',
    paddingBottom: '7%',
    backgroundColor: '#424242',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '5%',
  },
  text: {
    color: '#b4d4ee',
    fontSize: 35,
    fontWeight: 'bold'
  }
})

export const listViewStyles = StyleSheet.create({
    dateText: {
      color: '#9c9a9a',
      fontSize: 20,
      fontWeight: 'bold'
    },
    titleText: {
      color: '#BD95AF',
      fontSize: 27,
      fontWeight: 'bold'
    },
    contentText: {
      color: 'white',
      fontSize: 13,
      fontWeight: 'bold'
    },
    dreamTypeText: {
      color: '#9c9a9a',
      fontSize: 20,
      fontStyle: 'italic'
    },
    list: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    item: {
      backgroundColor: '#3A3A3A',
      margin: 5,
      justifyContent: 'space-around',
      padding: 15,
      width: 300,
      height: 150
    }
});



export const modalStyles = StyleSheet.create({
  item: {
    backgroundColor: '#3A3A3A',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: "#3A3A3A"
  },
  btn: {
    margin: 10,
    color: "#9c9a9a",
    padding: 10,
    fontSize: 20
  },
  dateText: {
      color: '#9c9a9a',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 23,
      marginBottom: 20
    },
    titleText: {
      color: '#BD95AF',
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 20
    },
    contentText: {
      color: 'white',
      fontSize: 25,
      marginBottom: 20
    },
    dreamTypeText: {
      color: '#BD95AF',
      fontSize: 18,
      fontStyle: 'italic'
    }

});

export const webVRStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   btnModal: {
    position: "absolute",
    bottom: "0%",
    right: "40%",
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  webView: {
    marginTop: 0,
    maxHeight: "100%",
    width: "100%"
  },
  btnTextVisible: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    fontWeight: "bold"
  },
  btnTextInvisible: {
    color: 'rgba(255, 255, 255, 0)',
    fontSize: 30,
    fontWeight: "bold"
  }
})

export const settingStyles = StyleSheet.create({
  image: {
    marginTop: 20,
    height: 100,
    borderRadius: 50,
    width: 100
  },
  imageContainer: {
    alignItems: 'center'
  },
  labels: {
    color: '#BD95AF',
    textAlign: 'left',
    marginBottom: 8,
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 8
  },
  textContainer: {
    padding: '10%',
    paddingBottom: '7%',
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderRadius: 3,
  },
  text: {
    color: '#fff',
    marginBottom: 20,
    fontSize: 20,
    paddingLeft: 8
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
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
   width: '38%',
   borderRadius: 10
  }
})
