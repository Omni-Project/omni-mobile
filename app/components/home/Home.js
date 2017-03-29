import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, StatusBar, Image, ScrollView } from 'react-native';
import { Content, Button, Text, Icon, FooterTab } from 'native-base';
import { TabNavigator } from 'react-navigation'
import Login from '../login/Login'
import JournalForm from '../journal/JournalForm'
import Settings from '../settings/Settings'
import AddDreams from '../dreams/AddDreams'
import AllDreams from '../dreams/AllDreams'
import {loginStyles, loginFormStyles, homeStyles, listViewStyles} from '../../assets/styles'

import {logout} from '../../reducers/auth'
import store from '../../store'
import { fetchWeekAnalytics } from '../../reducers/dreams'


import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryPie } from 'victory-native';

// Colors

const gridLinesColor = "#242424";
const axisColor = "rgb(137, 137, 137)";
const lineColor = "#a974d5";

// Typography
const sansSerif = "'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 12;

// Layout
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: axisColor
};

const centeredLabelStyles = Object.assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";


const theme = {
  axis: Object.assign({
    style: {
      axis: {
        fill: "red",
        stroke: axisColor,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: Object.assign({}, centeredLabelStyles, {
        padding,
        stroke: "red"
      }),
      grid: {
        fill: "transparent",
        stroke: "none",
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: axisColor,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: Object.assign({}, baseLabelStyles, {
        fill: axisColor,
        stroke: "transparent"
      })
    }
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: lineColor,
        padding,
        stroke: "transparent",
        strokeWidth: 0,
        width: 10
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  chart: baseProps,

  tooltip: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles,
      flyout: {
        stroke: lineColor,
        strokeWidth: 1,
        fill: "#f0f0f0"
      }
    },
    flyoutProps: {
      cornerRadius: 10,
      pointerLength: 10
    }
  }, baseProps),
};






class Home extends Component {
  constructor(){
    super()
    this.state = {weekDreams: []}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    //logging out
    store.dispatch(logout())
  }


  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({weekDreams: store.getState().dreams.weekDreams})
    })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }


  static navigationOptions = {
    tabBar: {
      label: 'Home',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Image
          source={require('./home.png')}
          style={{height: 25, width: 25}}
        />
      ),
    },
  }

  render() {

    let data = [{day: "", hours: 0}];

    if (this.state.weekDreams.length) {
      const weekDreams = this.state.weekDreams;
      let days = {},
          last7Days = [],
          today = new Date();

      for (let i=1; i < 8; i++) {
        let day = String(new Date(today.getFullYear(), today.getMonth(), today.getDate() - i)).slice(0,3);
        last7Days.push(day)
      }

      weekDreams.forEach(dream => {
        const day = String(new Date(dream.date)).slice(0,3);
        days[day] = {day, hours: +dream.totalHoursSlept}
      })

      data = last7Days.map(day => {
        return days[day] ? days[day] : {day, hours: 0}
      })
    }




    const { navigate } = this.props.navigation;

    return (
       <View>
      {/*Make phone-related status bar light*/}
        <StatusBar barStyle='light-content' />

        <View style={homeStyles.textContainer}>
          <Text style={{
            color: '#c8d8fc',
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'Helvetica Neue'
          }}>Home</Text>
        </View>

        <ScrollView
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log(''); }}
          scrollEventThrottle={200}
          style={{height: 505}}>

      <View style={{backgroundColor: '#2d2d2d'}}>
        <View style={homeStyles.textContainer}>
        <Text style={{
        color: '#BD95AF',
        fontSize: 25,
        fontWeight: 'bold'
      }}>Hours Slept Last Week</Text>
        </View>

        <VictoryChart
            theme={theme}
            domainPadding={20}
          >
        <VictoryBar
            colorScale={['#a974d5','#c989ff','#785199','#bd99db','#6b567c']}
            style={{
              labels: centeredLabelStyles
            }}

            labels={(datum) => `${+datum.hours}` > 0 ? `${datum.day}\n, ${datum.hours}\n hrs` : `${datum.day}`}
            data={data}
            width={350} height={350}
            x="day"
            y={(datum) => datum.hours}
          />
        </VictoryChart>
      </View>



      <View style={homeStyles.analyticsContainer}>
      <Text style={{
        color: '#BD95AF',
        fontSize: 25,
        fontWeight: 'bold'
      }}>Average Sleep Per Night</Text>

      <View style={{backgroundColor: '#212121', borderRadius: 100, height: 130, width: 130, margin: 15, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: '#a974d5'}}>{store.getState().auth.averageSleep}</Text>
      </View>
      </View>

      <View style={homeStyles.analyticsContainer2}>
      <Text style={{
        color: '#BD95AF',
        fontSize: 25,
        fontWeight: 'bold'
      }}>Sleep Debt</Text>

      <View style={{backgroundColor: '#212121', borderRadius: 100, height: 130, width: 130, margin: 15, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: '#a974d5'}}>{store.getState().auth.sleepDebt}</Text>
      </View>
      <Text style={{color: '#9b9b9b', fontStyle: 'italic', fontSize: 14}}>Based on recommended 8 hrs of sleep/night</Text>
      </View>


      </ScrollView>
      </View>
    );
  }
}


export default MyApp = TabNavigator({
  Home: {
    screen: Home,
  },
  Dreams: {
    screen: AllDreams,
  },
  AddDreams: {
    screen: AddDreams,
  },
  Settings: {
    screen: Settings
  }
}, {
  tabBarOptions: {
    inactiveTintColor: 'white',
    activeTintColor: '#eda6e8',
    style: {
      backgroundColor: 'black',
      height: 55
    },
  },
});
