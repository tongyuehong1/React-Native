/*
 * Revision History:
 *     Initial: 2018/01/21        LiuQi
 */

import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TopBar from './TopBar';
import ArticlesList from './ArticlesList';

import Icons from '../../res/icons';
import Colors from '../../res/colors';

export default class Community extends Component {
  static navigationOptions = {
    title: '社区',
    tabBarLabel: '社区',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
        size={Icons.medium}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.global}>
        <TopBar />

        <ArticlesList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: Colors.backgroundColorWhite,
  },
});
