/*
 * Revision History:
 *     Initial: 2018/01/24        LiuQi
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Plate from './Components/Plate';

import Fonts from '../../res/fonts';
import Layout from '../../res/dimensions';
import Colors from '../../res/colors';
import Icons from '../../res/icons';

class HumanHistory extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.titleBar}>
          <View style={styles.titleBarLeft}>
            <Text style={styles.titleBarLeftFont}>看鉴人文历史</Text>
          </View>
          <View style={styles.titleBarRight}>
            <Text style={styles.titleBarRightFont}>更多</Text>
            <Icon
              size={Icons.extiny}
              name="ios-arrow-forward"
              type="ionicon"
              color={Colors.iconColorGray}
            />
          </View>
        </View>

        <View>
          <Plate item={this.props.humanHistory[0]} />
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
    fontSize: Fonts.medium,
    fontWeight: 'bold',
  },

  titleBarRight: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: Layout.Width(120),
  },

  titleBarRightFont: {
    fontSize: Fonts.tiny,
    color: Colors.fontColorGray,
    marginRight: Layout.Width(10),
  },
});

export default connect(({ discovery }) => ({
  humanHistory: discovery.humanHistory,
}))(HumanHistory);
