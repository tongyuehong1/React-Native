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
 *     Initial: 2018/01/24        LiuQi
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tile } from 'react-native-elements';

import Fonts from '../../../res/fonts';
import Colors from '../../../res/colors';
import Layout from '../../../res/dimensions';
import Icons from '../../../res/icons';

function DiscoveryCard(props) {
  return (
    <View style={styles.global}>
      <View style={styles.title}>
        <View style={styles.titleBarLeft}>
          <Text style={styles.titleBarLeftFont}>{props.item.title}</Text>
        </View>
        <View style={styles.titleBarRight}>
          <View style={styles.titleBarRightBackgroundColor}>
            <Text style={styles.titleBarRightFont}>视频</Text>
          </View>
        </View>
      </View>

      <View>
        <Tile
          imageSrc={{ uri: props.item.image }}
          height={Layout.Height(350)}
          icon={{ name: 'play-circle', type: 'font-awesome' }}
          featured
        />
        <View style={styles.videoDetailBar}>
          <Text style={styles.videoDetailBarFont}>{props.item.playtimes}次播放</Text>
          <Text style={styles.videoDetailBarFont}>{props.item.time}</Text>
        </View>
      </View>

      <View style={styles.cardBottom}>
        <View style={styles.cardBottomPart}>
          <Icon
            size={Icons.small}
            name="ios-open-outline"
            color={Colors.iconColorGray}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.share}</Text>
        </View>
        <View style={styles.cardBottomPart}>
          <Icon
            size={Icons.small}
            name="ios-browsers-outline"
            color={Colors.iconColorGray}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.comment}</Text>
        </View>
        <View style={styles.cardBottomPart}>
          <Icon
            size={Icons.small}
            name="ios-heart-outline"
            color={Colors.iconColorGray}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.like}</Text>
        </View>
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

  titleBarRightBackgroundColor: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Layout.Height(40),
    width: Layout.Width(60),
    borderRadius: 15,
    backgroundColor: Colors.backgroundColorLightcoral,
  },

  titleBarRightFont: {
    fontSize: Fonts.tiny,
    color: Colors.fontColorWhite,
  },

  videoDetailBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.backgroundColorGray,
  },

  videoDetailBarFont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.backgroundColorGray,
    color: Colors.fontColorWhite,
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: Layout.Height(70),
  },

  cardBottomPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Layout.Width(88),
  },

  cardBottomPartFont: {
    color: Colors.fontColorGray,
  },
});

export default DiscoveryCard;
