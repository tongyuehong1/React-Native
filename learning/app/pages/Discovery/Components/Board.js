/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
