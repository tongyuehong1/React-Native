/*
 * Revision History:
 *     Initial: 2018/03/15        LiuQi
 */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

class Classic extends Component {
  static navigationOptions = {
    title: "精品",
    headerStyle: { backgroundColor: Colors.backgroundColor },
  };

  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar />}
      >
        <Text style={styles.textStyle} tabLabel="主题">主题</Text>
        <Text style={styles.textStyle} tabLabel="专辑">专辑</Text>
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
