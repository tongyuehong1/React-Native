import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Layout from '../../../res/dimensions';

class Classic extends Component {
  static navigationOptions = {
    title: "经典必看",
  };

  render() {
    return (
      <ScrollableTabView
        style={styles.asdf}
        renderTabBar={() => <DefaultTabBar />}
      >
        <Text style={styles.textStyle} tabLabel="娱乐">娱乐</Text>
        <Text style={styles.textStyle} tabLabel="科技">科技</Text>
        <Text style={styles.textStyle} tabLabel="军事">军事</Text>
        <Text style={styles.textStyle} tabLabel="体育">体育</Text>
      </ScrollableTabView>
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
