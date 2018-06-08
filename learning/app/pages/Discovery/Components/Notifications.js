import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Layout from '../../../res/dimensions';

class Classic extends Component {
  static navigationOptions = {
    title: "我的消息",
  };

  render() {
    return (
      <View style={styles.global}>
        <Text style={styles.text}>暂无消息呦</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: Layout.Height(1138),
    width: Layout.Width(640),
  },
  text: {
    fontSize: 40,
    color: '#808080',
  },
});
export default Classic;
