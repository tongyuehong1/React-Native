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
 *     Initial: 2018/01/21        LiuQi
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Top from './Top';
import Footprint from './Footprint';
import Medal from './Medal';
import Membership from './Membership';
import Order from './Order';
import Feedback from './Feedback';

import Layout from '../../res/dimensions';
import Icons from '../../res/icons';

export default class Settings extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '个人',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-contact' : 'ios-contact-outline'}
        size={Icons.medium}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.global}>
        <Top />

        <Footprint />

        <Medal />

        <Membership />

        <Order />

        <Feedback />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginTop: Layout.Height(40),
  },
});
