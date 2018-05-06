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
 *     Initial: 2018/03/15        LiuQi
 */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

class Classic extends Component {
  static navigationOptions = {
    title: "精品",
    headerStyle: { backgroundColor: Colors.backgroundColor },
  };

  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar />}
      >
        <Text style={styles.textStyle} tabLabel="主题">主题</Text>
        <Text style={styles.textStyle} tabLabel="专辑">专辑</Text>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
  },

  underline: {
    backgroundColor: "#F08080",
    width: Layout.Width(40),
    marginLeft: Layout.Width(134),
  },
});
export default Classic;
