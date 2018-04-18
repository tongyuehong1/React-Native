/*
 * Revision History:
 *     Initial: 2018/01/21        LiuQi
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Top from './Top';
import Footprint from './Footprint';
import Medal from './Medal';
import Membership from './Membership';
import Order from './Order';
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

        <Medal />

        <Membership />

        <Order />

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
