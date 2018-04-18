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

class RecommendToYou extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.titleBar}>
          <View style={styles.titleBarLeft}>
            <Text style={styles.titleBarLeftFont}>为你推荐</Text>
          </View>
        </View>

        <View>
          <Card item={this.props.toYou[0]} />
          <Card item={this.props.toYou[1]} />
          <Card item={this.props.toYou[2]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginBottom: Layout.Height(10),
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
    fontSize: Fonts.medium,
    fontWeight: 'bold',
  },
});

export default connect(({ discovery }) => ({
  toYou: discovery.toYou,
}))(RecommendToYou);
