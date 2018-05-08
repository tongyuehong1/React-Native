import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Layout from '../../res/dimensions';
import Icons from '../../res/icons';
import Colors from '../../res/colors';

export default class Footprint extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.part}>
          <Icon
            name="ios-star-outline"
            size={Icons.large}
            type="ionicon"
          />
          <Text style={styles.font}>我的收藏</Text>
        </View>

        <View style={styles.part}>
          <Icon
            name="ios-clock-outline"
            size={Icons.large}
            type="ionicon"
          />
          <Text style={styles.font}>历史记录</Text>
        </View>

        <View style={styles.part}>
          <Icon
            name="ios-download-outline"
            size={Icons.large}
            type="ionicon"
          />
          <Text style={styles.font}>离线下载</Text>
        </View>

        <View style={styles.partLast}>
          <Icon
            name="ios-mail-outline"
            size={Icons.large}
            type="ionicon"
          />
          <Text style={styles.font}>我的消息</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: Layout.Width(30),
    backgroundColor: Colors.backgroundColorWhite,
  },

  part: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  partLast: {
    alignItems: 'center',
    flex: 1,
  },

  font: {
    marginTop: Layout.Height(10),
  },
});
