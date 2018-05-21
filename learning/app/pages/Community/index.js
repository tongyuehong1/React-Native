import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TopBar from './TopBar';
import ArticlesList from './ArticlesList';

import Icons from '../../res/icons';
import Colors from '../../res/colors';
import Layout from '../../res/dimensions';

export default class Community extends Component {
  static navigationOptions = {
    header: null,
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
    marginTop: Layout.Height(40),
    backgroundColor: Colors.backgroundColorWhite,
  },
});
