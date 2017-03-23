import React, {Component} from 'react'
import PushNotification from 'react-native-push-notification'

export default class PushController extends Component {
  componentDidMount(){
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          //to fill out later - what do we want to happen when user actually clicks on the notification
      }
    })
  }

  render(){
    return null
  }
}
