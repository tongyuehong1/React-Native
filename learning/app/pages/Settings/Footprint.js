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
 *     Initial: 2018/01/28        LiuQi
 */

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
