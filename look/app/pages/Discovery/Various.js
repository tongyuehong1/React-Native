/*
 * Revision History:
 *     Initial: 2018/01/24        LiuQi
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Card from './Components/Card';

import Fonts from '../../res/fonts';
import Layout from '../../res/dimensions';
import Colors from '../../res/colors';

class Various extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.titleBar}>
          <View style={styles.titleBarLeft}>
            <Text style={styles.titleBarLeftFont}>看鉴V</Text>
          </View>
        </View>
        <View>
          <Card item={this.props.various[0]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginBottom: Layout.Height(20),
    backgroundColor: Colors.backgroundColorWhite,
  },

  titleBar: {
    flexDirection: "row",
    height: Layout.Height(80),
  },

  titleBarLeft: {
    justifyContent: 'center',
    marginLeft: Layout.Width(30),
    flex: 1,
  },

  titleBarLeftFont: {
    fontWeight: 'bold',
    fontSize: Fonts.medium,
  },
});

export default connect(({ discovery }) => ({
  various: discovery.various,
}))(Various);
