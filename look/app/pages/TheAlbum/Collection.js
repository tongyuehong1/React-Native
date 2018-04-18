/*
 * Revision History:
 *     Initial: 2018/01/27        LiuQi
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Collections from './Components/Collection';

import Fonts from '../../res/fonts';
import Layout from '../../res/dimensions';
import Colors from '../../res/colors';
import Icons from '../../res/icons';

class Collection extends Component {
  render() {
    return (
      <View style={styles.global}>
        <Text style={styles.collection}>
          视频收藏
          <Text>（3）</Text>
        </Text>
        <View>
          <Collections item={this.props.collection[0]} />
          <Collections item={this.props.collection[1]} />
          <Collections item={this.props.collection[2]} />
        </View>
        <View style={styles.viewAll}>
          <Text style={styles.see}>查看全部</Text>
          <Icon
            size={Icons.extiny}
            name="ios-arrow-forward"
            type="ionicon"
            color={Colors.iconColorGray}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: Colors.backgroundColorWhite,
    height: Layout.Height(910),
  },

  collection: {
    fontSize: Fonts.medium,
    marginLeft: Layout.Width(30),
  },

  viewAll: {
    marginTop: Layout.Height(40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  see: {
    fontSize: Fonts.small,
    marginRight: Layout.Width(10),
    color: Colors.fontColorGray,
  },
});

export default connect(({ thealbum }) => ({
  collection: thealbum.collection,
}))(Collection);
