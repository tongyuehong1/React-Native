/*
 * Revision History:
 *     Initial: 2018/01/30        LiuQi
 */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image } from 'react-native';

import Fonts from '../../../res/fonts';
import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';
import icons from '../../../res/icons';

function DiscoveryBoard(props) {
  return (
    <View style={styles.global}>
      <View style={styles.title}>
        <View style={styles.titleBarLeft}>
          <Text style={styles.titleBarLeftFont}>{props.item.title}</Text>
        </View>
        <View style={styles.titleBarRight}>
          <View style={styles.titleBarRightBackgroundcolor}>
            <Text style={styles.titleBarRightFont}>图片</Text>
          </View>
        </View>
      </View>

      <Image
        style={styles.image}
        source={{ uri: props.item.image }}
      />

      <View style={styles.topic}>
        <Text style={styles.topicFont}>{props.item.topic}</Text>
      </View>
      <View style={styles.article}>
        <Text style={styles.articleFont}>{props.item.article}</Text>
      </View>

      <View style={styles.shareBar}>
        <Icon
          size={icons.small}
          name="ios-open-outline"
          color={Colors.iconColorGray}
        />
        <Text style={styles.shareBarTimes}>{props.item.share}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    borderColor: Colors.borderColorLightgray,
    borderTopWidth: 1,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Layout.Height(80),
  },

  titleBarLeft: {
    justifyContent: 'center',
    marginLeft: Layout.Width(30),
    flex: 1,
  },

  titleBarLeftFont: {
    fontSize: Fonts.medium,
  },

  titleBarRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Layout.Width(120),
  },

  titleBarRightBackgroundcolor: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Layout.Height(40),
    width: Layout.Width(60),
    borderRadius: 15,
    backgroundColor: Colors.backgroundColorOrange,
  },

  titleBarRightFont: {
    color: Colors.fontColorWhite,
    fontSize: Fonts.tiny,
  },

  image: {
    width: Layout.Width(640),
    height: Layout.Height(400),
  },

  topic: {
    marginTop: Layout.Height(20),
    marginLeft: Layout.Width(30),
    marginBottom: Layout.Width(20),
  },

  topicFont: {
    fontSize: Fonts.xlarge,
  },

  article: {
    marginLeft: Layout.Width(30),
    marginRight: Layout.Width(30),
  },

  articleFont: {
    fontSize: Fonts.tiny,
  },

  shareBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Layout.Width(96),
    marginTop: Layout.Height(20),
    marginLeft: Layout.Width(30),
    marginBottom: Layout.Height(20),
  },

  shareBarTimes: {
    color: Colors.fontColorGray,
  },
});

export default DiscoveryBoard;
