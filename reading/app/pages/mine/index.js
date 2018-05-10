import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Layout from '../../res/dimensions';

export default class Bookcase extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '书架',
  }
  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.topBarTitle}>严阅</Text>
            <Text>严天泽电子书阅读app，简称：严阅。</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#FFFFFF', //white
  },
  topBar: {
    marginVertical: Layout.Height(40),
    marginHorizontal: Layout.Width(30),
    paddingBottom: Layout.Height(40),
    borderBottomWidth: 1,
    borderColor: "#D3D3D3", //lightgray
  },
  topBarTitle: {
    fontSize: 30,
    color: "#000000", //black
  },
});
