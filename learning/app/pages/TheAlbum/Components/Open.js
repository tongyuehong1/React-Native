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
 *     Initial: 2018/02/02        LiuQi
 */

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
