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

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Plate from './Components/Plate';

import Fonts from '../../res/fonts';
import Layout from '../../res/dimensions';
import Colors from '../../res/colors';
import Icons from '../../res/icons';

class HumanHistory extends Component {
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.titleBar}>
          <View style={styles.titleBarLeft}>
            <Text style={styles.titleBarLeftFont}>看鉴人文历史</Text>
          </View>
          <View style={styles.titleBarRight}>
            <Text style={styles.titleBarRightFont}>更多</Text>
            <Icon
              size={Icons.extiny}
              name="ios-arrow-forward"
              type="ionicon"
              color={Colors.iconColorGray}
            />
          </View>
        </View>

        <View>
          <Plate item={this.props.humanHistory[0]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginBottom: Layout.Height(20),
    backgroundColor: Colors.backgroundColorWhite,
  },

  titleBar: {
    flexDirection: "row",
    height: Layout.Height(80),
  },

  titleBarLeft: {
    justifyContent: 'center',
    marginLeft: Layout.Width(30),
    flex: 1,
  },

  titleBarLeftFont: {
    fontSize: Fonts.medium,
    fontWeight: 'bold',
  },

  titleBarRight: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: Layout.Width(120),
  },

  titleBarRightFont: {
    fontSize: Fonts.tiny,
    color: Colors.fontColorGray,
    marginRight: Layout.Width(10),
  },
});

export default connect(({ discovery }) => ({
  humanHistory: discovery.humanHistory,
}))(HumanHistory);
