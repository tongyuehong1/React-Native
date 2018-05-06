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
import { Icon, Avatar } from 'react-native-elements';

import Colors from '../../res/colors';
import Layout from '../../res/dimensions';
import Fonts from '../../res/fonts';
import Icons from '../../res/icons';

export default class Top extends Component {
  render() {
    return (
      <View style={styles.global}>
        <Avatar
          large
          rounded
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
          onPress={() => console.log("Works!")} //eslint-disable-line
          activeOpacity={0.7}
        />

        <View style={styles.content}>
          <Text style={styles.contentName}>Mr.刘琦</Text>
          <View style={styles.contentWord}>
            <Icon
              name="create"
              size={Icons.extiny}
            />
            <Text style={styles.contentWordFont}>一句话介绍自己</Text>
          </View>
          <View style={styles.contentPersonal}>
            <Text style={styles.contentPersonalFont}>关注</Text>
            <Text style={styles.contentPersonalNumber}>2</Text>
            <Text style={styles.contentPersonalDivider}>|</Text>
            <Text style={styles.contentPersonalFont}>粉丝</Text>
            <Text style={styles.contentPersonalNumber}>0</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Layout.Height(20),
    backgroundColor: Colors.backgroundColorWhite,
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentName: {
    fontSize: Fonts.medium,
    fontWeight: 'bold',
    marginTop: Layout.Height(20),
  },

  contentWord: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Layout.Height(10),
    marginBottom: Layout.Height(20),
  },

  contentWordFont: {
    fontSize: Fonts.tiny,
    color: Colors.fontColorGray,
    marginLeft: Layout.Width(4),
  },

  contentPersonal: {
    flexDirection: 'row',
  },

  contentPersonalFont: {
    fontSize: Fonts.small,
  },

  contentPersonalNumber: {
    marginLeft: Layout.Width(4),
    color: '#FF0000', //red
  },

  contentPersonalDivider: {
    marginLeft: Layout.Width(10),
    marginRight: Layout.Width(10),
  },
});
