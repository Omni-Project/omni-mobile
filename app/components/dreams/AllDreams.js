
import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, KeyboardAvoidingView,  ListView, Image, TouchableOpacity, Text } from 'react-native';
import store from '../../store'
import { homeStyles, listViewStyles } from '../../assets/styles';
import { receiveAllDreams } from '../../reducers/dreams'



{/*var dreamsArr = Object.keys(this.props.dreams).map(key => this.props.dreams[key]);*/}

{/*Dummy Data to render grid view on All Dreams Tab*/}
var dreamsArr = Array.apply(null, Array(60)).map((v, i) => {
    return (
        <View style={listViewStyles.item}>
        <TouchableOpacity>
          <Text style={listViewStyles.dateText}>Tuesday, February 14, 2017</Text>
          <Text style={listViewStyles.titleText}>A bad dream</Text>
          <Text style={listViewStyles.contentText}>I dreamt today that blahblahblahblahblah</Text>
          <Text style={listViewStyles.dreamTypeText}>Lucid Dream</Text>
        </TouchableOpacity>
        </View>
    )
});

export default class Dreams extends React.Component {
  constructor(props) {
    super(props);

    {/*Boilerplate for ListView*/}
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid });
    var oneEntry = dreamsArr.map(dream => dream);
    this.state = {
        dataSource: ds.cloneWithRows(oneEntry)
    };
  }

  static navigationOptions = {
    tabBar: {
      label: 'Dreams',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Image
          source={require('./moon.png')}
        />
      ),
    },
  }


render() {
    return (
        <KeyboardAvoidingView>
         
         <StatusBar barStyle='light-content' />
          <View style={homeStyles.textContainer}>
            <Text style={homeStyles.text}>Dreams</Text>
          </View>
        
        <ListView
          contentContainerStyle={listViewStyles.list}
          dataSource = { this.state.dataSource }
          renderRow={(rowData) => <Text style={listViewStyles.item}>{rowData}</Text>}
        />
        
        </KeyboardAvoidingView>
    )
  }
}


