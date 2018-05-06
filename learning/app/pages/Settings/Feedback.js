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
