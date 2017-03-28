
import React, { Component } from 'react';
import { Button, Dimensions, ScrollView, StatusBar, StyleSheet, View, KeyboardAvoidingView,  ListView, Image, TouchableOpacity, Text } from 'react-native';
import store from '../../store'
import { homeStyles, listViewStyles, modalStyles } from '../../assets/styles';
import Modal from 'react-native-modalbox';
import DreamModal from './DreamModal';

export const DreamBox = (props) => {
    const dream = props.dream
    //date formatting
    const date = new Date(dream.date)
    const locale = "en-us"
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const index = props.i
    return (
        <View style={listViewStyles.item}>
        <TouchableOpacity
          onPress={(evt) => props.handlePress(index)}>
            <Text style={listViewStyles.dateText}>{date.toLocaleString(locale, options)}</Text>
            <Text style={listViewStyles.titleText}>{dream.title}</Text>
            <Text style={listViewStyles.dreamTypeText}>{dream.dreamType}</Text>
        </TouchableOpacity>
        </View>
    )
};

//made global so that this can be accessed from componentWillUpdate hook
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid });
const screen = Dimensions.get('window');

export default class Dreams extends React.Component {
  constructor(props) {
    super(props);
    {/*Boilerplate for ListView*/}
    this.entries = []
    this.state = {
        dreams: store.getState().dreams,
        dataSource: ds.cloneWithRows(this.entries),
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3,
        selectedIndex: 0
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

handlePress(i) {
  this.setState({selectedIndex: i})
  this.refs.modal1.open()
}

handleClose() {
  this.setState({isOpen: false})
  this.refs.modal1.close()
}


//resetting the state step by step, because it doesn't render all dreams just by updating the state.dreams
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({dreams: store.getState().dreams})
      this.entries = this.state.dreams.list.map((dream, i) => <DreamBox handlePress={this.handlePress} dream={dream} i={i} key={dream.id} />)
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
      <View style={{flex:1}}>
         <StatusBar barStyle='light-content' />
          <View style={homeStyles.textContainer}>
            <Text style={homeStyles.text}>Dreams</Text>
          </View>


        <ListView
          contentContainerStyle={listViewStyles.list}
          dataSource = { this.state.dataSource }
          renderRow={(rowData) => <Text style={listViewStyles.item}>{rowData}</Text>}
          enableEmptySections={true}
        />

          <Modal
            position='bottom'
            style={modalStyles.modal}
            ref={"modal1"}
            swipeToClose={this.state.swipeToClose}
            swipeArea={20}>
            <ScrollView>
              <View style={{width: screen.width, paddingLeft:30, paddingRight: 30}}>
              <DreamModal dream={this.state.dreams.list[this.state.selectedIndex]} />
              </View>
            </ScrollView>
            <TouchableOpacity onPress={this.handleClose}><Text style={modalStyles.btn}>Close</Text></TouchableOpacity>
          </Modal>
        </View>
    )
  }
}
