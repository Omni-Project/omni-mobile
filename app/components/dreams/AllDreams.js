
import React, { Component } from 'react';
import { Button, Dimensions, ScrollView, StatusBar, StyleSheet, View, KeyboardAvoidingView,  ListView, Image, TouchableOpacity, Text, Switch } from 'react-native';
import store from '../../store'
import { homeStyles, listViewStyles, modalStyles, journalStyles } from '../../assets/styles';
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
    this.togglePublicView = this.togglePublicView.bind(this)
  }

handlePress(i) {
  this.setState({selectedIndex: i})
  this.refs.modal.open()
}

handleClose() {
  this.setState({isOpen: false})
  this.refs.modal.close()
}

togglePublicView(val) {
  if (val === true) {
    store.dispatch(receivePublicDreams())
    this.setState({isPublic: true})
  }
  else {
    this.setState({isPublic: false})
    this.setDreamBoxes('userDreams')
  }
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

          <View style={homeStyles.btnContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Switch
                onValueChange={(value) => this.togglePublicView(value)}
                style={{marginRight: 10}}
                onTintColor='#BD95AF'
                value={this.state.isPublic}
              />
              <Text style={journalStyles.headingText}>View Public Dreams</Text>
            </View>
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
