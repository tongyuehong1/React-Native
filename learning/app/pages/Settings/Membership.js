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
import Colors from '../../res/colors';
import Icons from '../../res/icons';
import Fonts from '../../res/fonts';

export default class Membership extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Text style={styles.titleLeftFont}>我的会员</Text>
          </View>
          <View style={styles.titleRight}>
            <Text style={styles.titleRightFont}>注册日期2018-01-20</Text>
            <Icon
              size={Icons.extiny}
              name="ios-arrow-forward"
              type="ionicon"
              color={Colors.iconColorGray}
            />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentPart}>
            <Text style={styles.contentPartNumber}>0</Text>
            <Text style={styles.contentPartFont}>发表观点</Text>
          </View>
          <View style={styles.contentPart}>
            <Text style={styles.contentPartNumber}>3</Text>
            <Text style={styles.contentPartFont}>已购专辑</Text>
          </View>
          <View style={styles.contentPart}>
            <Text style={styles.contentPartNumber}>8</Text>
            <Text style={styles.contentPartFont}>收藏内容</Text>
          </View>
        </View>

        <View style={styles.contentBottom}>
          <View style={styles.contentBottomCenter}>
            <Text style={styles.contentBottomFont}>我的兑换码</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginTop: Layout.Height(10),
    backgroundColor: Colors.backgroundColorWhite,
  },

  title: {
    paddingVertical: Layout.Height(20),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  titleLeft: {
    flex: 1,
    marginLeft: Layout.Width(20),
  },

  titleLeftFont: {
    fontSize: Fonts.medium,
  },

  titleRight: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Layout.Width(240),
  },

  titleRightFont: {
    marginRight: Layout.Width(10),
    color: Colors.fontColorGray,
    fontSize: Fonts.tiny,
  },

  content: {
    flexDirection: 'row',
    marginTop: Layout.Height(40),
    marginBottom: Layout.Height(40),
  },

  contentPart: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: Colors.borderColorLightgray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentPartNumber: {
    marginBottom: Layout.Height(20),
    fontSize: Fonts.xxxlarge,
    color: Colors.fontColorDarkGoldenRod,
  },

  contentPartFont: {
    fontSize: Fonts.medium,
  },

  contentBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Layout.Height(40),
  },

  contentBottomCenter: {
    width: Layout.Width(124),
    borderBottomWidth: 1,
    borderColor: Colors.borderColorGray,
  },

  contentBottomFont: {
    fontSize: Fonts.small,
    fontWeight: 'bold',
    color: Colors.fontColorGray,
  },
});
