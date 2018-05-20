import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import Icons from '../../../res/icons';
import Colors from '../../../res/colors';
import Layout from '../../../res/dimensions';
import Fonts from '../../../res/fonts';

class Open extends Component {
  render() {
    return (
      <View style={styles.members}>
        <View style={styles.left}>
          <Icon
            name="trophy"
            type="evilicon"
            color={Colors.iconColorGoldenrod}
            size={Icons.xxlarge}
          />
        </View>

        <View style={styles.center}>
          <Text style={styles.open}>
            开通
            <Text style={styles.study}>全年学习包</Text>
          </Text>
          <Text style={styles.free}>(免费观看全部进阶专辑)</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.immediately}>马上开通</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  members: {
    height: Layout.Height(130),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },

  left: {
    flex: 1,
  },

  center: {
    flex: 4,
  },

  open: {
    fontSize: Fonts.medium,
    fontWeight: 'bold',
    marginBottom: Layout.Height(10),
  },

  study: {
    color: Colors.fontColorDarkGoldenRod,
  },

  free: {
    color: Colors.fontColorGray,
  },

  right: {
    width: Layout.Width(120),
    height: Layout.Height(44),
    backgroundColor: Colors.backgroundColorLightcoral,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.Width(10),
  },

  immediately: {
    color: Colors.fontColorWhite,
    fontWeight: 'bold',
  },
});

export default Open;
