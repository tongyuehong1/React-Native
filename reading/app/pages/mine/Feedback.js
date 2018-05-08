import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Colors from '../../res/colors';
import Layout from '../../res/dimensions';

export default class Feedback extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.content}>
          <Icon
            name="ios-git-merge"
            type="ionicon"
          />
          <Text style={styles.font}>分享看鉴</Text>
        </View>

        <View style={styles.content}>
          <Icon
            name="ios-create-outline"
            type="ionicon"
          />
          <Text style={styles.font}>意见反馈</Text>
        </View>

        <View style={styles.content}>
          <Icon
            name="ios-star-outline"
            type="ionicon"
          />
          <Text style={styles.font}>给个好评</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundColorWhite,
    marginTop: Layout.Height(10),
    paddingVertical: Layout.Height(40),
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderLeftWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  font: {
    marginTop: Layout.Height(20),
  },
});
