
import React, { Component } from 'react';
import { Button, Dimensions, ScrollView, StatusBar, StyleSheet, View, KeyboardAvoidingView,  ListView, Image, TouchableOpacity, Text } from 'react-native';
import store from '../../store'
import { homeStyles, listViewStyles, modalStyles } from '../../assets/styles';
import Modal from 'react-native-modalbox';
import DreamModal from './DreamModal';

import { receiveAllDreams, receivePublicDreams } from '../../reducers/dreams'

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
        userDreams: store.getState().dreams.userDreams,
        publicDreams: store.getState().dreams.publicDreams,
        dataSource: ds.cloneWithRows(this.entries),
        isOpen: false,
        isDisabled: false,
        isPublic: false,
        swipeToClose: true,
        sliderValue: 0.3,
        selectedIndex: 0
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setDreamBoxes = this.setDreamBoxes.bind(this);
    this.viewPublicDreams = this.viewPublicDreams.bind(this);
    this.viewUserDreams = this.viewUserDreams.bind(this)
  }

handlePress(i) {
  this.setState({selectedIndex: i})
  this.refs.modal.open()
}

handleClose() {
  this.setState({isOpen: false})
  this.refs.modal.close()
}

viewPublicDreams() {
  store.dispatch(receivePublicDreams())
  this.setState({isPublic: true})
}

viewUserDreams() {
  this.setState({isPublic: false})
  this.setDreamBoxes('userDreams')
}

setDreamBoxes(type) {
  this.entries = this.state[type].map((dream, i) => <DreamBox handlePress={this.handlePress} dream={dream} i={i} key={dream.id} />)
  this.setState({dataSource:ds.cloneWithRows(this.entries)})
}

//resetting the state step by step, because it doesn't render all dreams just by updating the state.dreams
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      let type = this.state.isPublic ? 'publicDreams' : 'userDreams';
      this.setState({[type]: store.getState().dreams[type]})
      this.setDreamBoxes(type)
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

          <View style={{flexDirection: 'row'}}>
            <Text style={modalStyles.btn}>Filter: </Text>
            <TouchableOpacity onPress={this.viewUserDreams}><Text style={modalStyles.btn}>Your Dreams</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.viewPublicDreams}><Text style={modalStyles.btn}>Public Dreams</Text></TouchableOpacity>
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
            ref={"modal"}
            swipeToClose={this.state.swipeToClose}
            swipeArea={20}>
            <ScrollView>
              <View style={{width: screen.width, paddingLeft:30, paddingRight: 30}}>
              {
                this.state.isPublic ? <DreamModal dream={this.state.publicDreams[this.state.selectedIndex]} /> : <DreamModal dream={this.state.userDreams[this.state.selectedIndex]} />
              }
              </View>
            </ScrollView>
            <TouchableOpacity onPress={this.handleClose}><Text style={modalStyles.btn}>Close</Text></TouchableOpacity>
          </Modal>
        </View>
    )
  }
}
