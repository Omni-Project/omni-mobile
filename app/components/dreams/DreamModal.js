
import React from 'react';
import { Text, View } from 'react-native';
import { modalStyles } from '../../assets/styles';


// Props =>  props.dream
export default (props) => {
    const date = new Date(props.dream.date)
    const locale = "en-us"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return (
        <View style={modalStyles.item}>
          <Text style={modalStyles.dateText}>{date.toLocaleString(locale, options)}</Text>
          <Text style={modalStyles.titleText}>{props.dream.title}</Text>
          <Text style={modalStyles.contentText}>{props.dream.content}</Text>
          <Text style={modalStyles.dreamTypeText}>{props.dream.dreamType}</Text>
        </View>
    )
};
