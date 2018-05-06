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

export default class Order extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Text style={styles.titleLeftFont}>我的订单</Text>
          </View>
          <View style={styles.titleRight}>
            <Text style={styles.titleRightFont}>查看全部订单</Text>
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
            <Icon
              name="ios-jet-outline"
              size={Icons.xlarge}
              type="ionicon"
            />
            <Text style={styles.contentPartFont}>已发货</Text>
          </View>
          <View style={styles.contentPart}>
            <Icon
              name="ios-brush-outline"
              size={Icons.xlarge}
              type="ionicon"
            />
            <Text style={styles.contentPartFont}>待评价</Text>
          </View>
          <View style={styles.contentPart}>
            <Icon
              name="ios-checkmark-circle-outline"
              size={Icons.xlarge}
              type="ionicon"
            />
            <Text style={styles.contentPartFont}>已完成</Text>
          </View>
          <View style={styles.contentPartLast}>
            <Icon
              name="ios-home-outline"
              size={Icons.xlarge}
              type="ionicon"
            />
            <Text style={styles.contentPartFont}>收货地址</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: Colors.backgroundColorWhite,
    marginTop: Layout.Height(10),
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
    width: Layout.Width(170),
  },

  titleRightFont: {
    marginRight: Layout.Width(10),
    color: Colors.fontColorGray,
    fontSize: Fonts.tiny,
  },

  content: {
    flexDirection: 'row',
    paddingVertical: Layout.Width(40),
  },

  contentPart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRightWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  contentPartLast: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRightWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  contentPartFont: {
    marginTop: Layout.Height(10),
  },
});
