import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Top from './Top';
import Footprint from './Footprint';
import Membership from './Membership';
import Feedback from './Feedback';

import Layout from '../../res/dimensions';
import Icons from '../../res/icons';

export default class Settings extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '个人',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-contact' : 'ios-contact-outline'}
        size={Icons.medium}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.global}>
        <Top />

        <Footprint />

        <Membership />

        <Feedback />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginTop: Layout.Height(40),
  },
});
