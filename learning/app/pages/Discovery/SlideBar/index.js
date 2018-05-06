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
import { ScrollView, StyleSheet } from 'react-native';

import Navigator, { dispatcher } from '../../../helper/navigator';
import Touch from './Components/Touch';

import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

export default class SlideBar extends Component {
  render() {
    const dispatch = dispatcher(this.props);
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.slideBar}
      >
        <Touch
          name="ios-star"
          text="经典必看"
          color="lightcoral"
          onPress={() => dispatch(Navigator.navigate('Classic'))}
        />
        <Touch
          name="ios-heart"
          text="精品"
          color="greenyellow"
          onPress={() => dispatch(Navigator.navigate('Quality'))}
        />
        <Touch
          name="ios-stats"
          text="分类"
          color="mediumpurple"
          onPress={() => dispatch(Navigator.navigate('classify'))}
        />
        <Touch
          name="ios-bookmarks"
          text="历史今天"
          color="dodgerblue"
          onPress={() => dispatch(Navigator.navigate('history'))}
        />
        <Touch
          name="ios-ribbon"
          text="会员服务"
          color="gold"
          onPress={() => dispatch(Navigator.navigate('service'))}
        />
        <Touch
          name="ios-pricetag"
          text="货栈"
          color="orange"
          onPress={() => dispatch(Navigator.navigate('wearhouse'))}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideBar: {
    marginBottom: Layout.Height(10),
    backgroundColor: Colors.backgroundColorWhite,
  },
});
