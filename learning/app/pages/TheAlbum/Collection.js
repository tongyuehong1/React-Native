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
 *     Initial: 2018/01/27        LiuQi
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Collections from './Components/Collection';

import Fonts from '../../res/fonts';
import Layout from '../../res/dimensions';
import Colors from '../../res/colors';
import Icons from '../../res/icons';

class Collection extends Component {
  render() {
    return (
      <View style={styles.global}>
        <Text style={styles.collection}>
          视频收藏
          <Text>（3）</Text>
        </Text>
        <View>
          <Collections item={this.props.collection[0]} />
          <Collections item={this.props.collection[1]} />
          <Collections item={this.props.collection[2]} />
        </View>
        <View style={styles.viewAll}>
          <Text style={styles.see}>查看全部</Text>
          <Icon
            size={Icons.extiny}
            name="ios-arrow-forward"
            type="ionicon"
            color={Colors.iconColorGray}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: Colors.backgroundColorWhite,
    height: Layout.Height(910),
  },

  collection: {
    fontSize: Fonts.medium,
    marginLeft: Layout.Width(30),
  },

  viewAll: {
    marginTop: Layout.Height(40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  see: {
    fontSize: Fonts.small,
    marginRight: Layout.Width(10),
    color: Colors.fontColorGray,
  },
});

export default connect(({ thealbum }) => ({
  collection: thealbum.collection,
}))(Collection);
