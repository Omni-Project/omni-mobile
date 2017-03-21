'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Platform,
  Switch,
  Text,
  View
} = ReactNative;

export default class extends React.Component {
  state = {
    switchIsOne: false
  };

  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({switchIsOne: value})}
          style={{marginBottom: 10}}
          value={this.state.switchIsOne} />
      </View>
    );
  }
}
