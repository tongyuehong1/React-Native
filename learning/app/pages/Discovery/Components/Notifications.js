import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import Layout from '../../../res/dimensions';

class Classic extends Component {
  static navigationOptions = {
    title: "我的消息",
  };

  render() {
    return (
      <View
        style={styles.liuqi}
      >
        <View>
          <Text style={styles.text}>阿斯蒂芬</Text>
          <Icon name="rocket" size={30} color="#900" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
  },

  underline: {
    backgroundColor: "#F08080",
    width: Layout.Width(40),
    marginLeft: Layout.Width(134),
  },
});
export default Classic;
