import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Top from './Top';
import Footprint from './Footprint';
import Medal from './Medal';
import Membership from './Membership';
import Feedback from './Feedback';

import Layout from '../../res/dimensions';

export default class Settings extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '个人',
  };

  render() {
    return (
      <ScrollView style={styles.global}>
        <Top />
        <Footprint />
        <Medal />
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
