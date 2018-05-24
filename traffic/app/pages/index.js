import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Navigator, { dispatcher } from '../helper/navigator';
import Layout from '../res/dimensions';

let dispatch;

export default class MapTypesExample extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }
  render() {
    return (
      <View style={styles.global}>
        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('Map'))}
        >
          <Text style={styles.fontTitle}>徐基欣毕设</Text>
          <Text style={styles.fontContent}>基于Android终端实时路况共享平台的设计与实现</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    height: Layout.Height(1000),
    width: Layout.Width(600),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Layout.Width(40),
  },
  fontTitle: {
    fontSize: 30,
    lineHeight: 60,
    color: '#FA8072',
  },
  fontContent: {
    fontSize: 20,
    color: '#00BFFF',
  },
});
