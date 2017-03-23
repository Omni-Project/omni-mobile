
import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, KeyboardAvoidingView,  ListView, Image, TouchableOpacity, Text } from 'react-native';
import store from '../../store'
import { homeStyles, listViewStyles } from '../../assets/styles';
import Modal from 'react-native-modalbox';
import DreamModal from './DreamModal';


const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});

export const DreamBox = (props) => {
    const dream = props.dream
    //date formatting
    const date = new Date(dream.date)
    const locale = "en-us"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const index = props.i
    console.log('PROPS OF DREAM BOX', props)
    return (
        <View style={listViewStyles.item}>
        <TouchableOpacity 
          onPress={(evt) => props.handlePress(index)}>
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
        dataSource: ds.cloneWithRows(this.entries),
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3,
        selectedIndex: 0
    };
    this.handlePress = this.handlePress.bind(this);
  }

handlePress(i) {
  console.log('i IN HANDLEPRESS', i);
  this.setState({selectedIndex: i})
  this.refs.modal1.open()
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
  console.log('STATE', this.state)
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

          <Modal
            style={[styles.modal, styles.modal1]}
            ref={"modal1"}
            swipeToClose={this.state.swipeToClose}>
              <DreamModal dream={this.state.dreams.list[this.state.selectedIndex]} />
          </Modal>

          
        </KeyboardAvoidingView>
    )
  }
}
