
import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, KeyboardAvoidingView,  ListView, Image, TouchableOpacity, Text } from 'react-native';
import store from '../../store'
import { homeStyles, listViewStyles } from '../../assets/styles';


export const DreamBox = (props) => {
    const dream = props.dream
    //date formatting
    const date = new Date(dream.date)
    const locale = "en-us"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return (
        <View style={listViewStyles.item}>
        <TouchableOpacity>
          <Text style={listViewStyles.dateText}>{date.toLocaleString(locale, options)}</Text>
          <Text style={listViewStyles.titleText}>{dream.title}</Text>
          <Text style={listViewStyles.contentText}>{dream.content.slice(0, 50)}...</Text>
          <Text style={listViewStyles.dreamTypeText}>{dream.dreamType}</Text>
        </TouchableOpacity>
        </View>
    )
};

//made global so that this can be accessed from componentWillUpdate hook
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid });

export default class Dreams extends React.Component {
  constructor(props) {
    super(props);
    {/*Boilerplate for ListView*/}
    this.entries = []
    this.state = {
        dreams: store.getState().dreams,
        dataSource: ds.cloneWithRows(this.entries)
    };
  }

//resetting the state step by step, because it doesn't render all dreams just by updating the state.dreams
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({dreams: store.getState().dreams})
      this.entries = this.state.dreams.list.map(dream => <DreamBox dream={dream} key={dream.id} />)
      this.setState({dataSource:ds.cloneWithRows(this.entries)})
    })
  }

  componentWillUnmount(){
    this.unsubscribe()
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
