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

/* eslint-disable default-case */

import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Advanced from './Advanced';
import Collection from './Collection';
import Purchased from './Purchased';

import Layout from '../../res/dimensions';
import Icons from '../../res/icons';

const tabIndexAdvanced = 0;
const tabIndexCollection = 1;
const tabIndexPurchased = 2;

export default class TheAlbum extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '专辑',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-book' : 'ios-book-outline'}
        size={Icons.medium}
        style={{ color: tintColor }}
      />
    ),
  };

  state = {
    tabIndex: tabIndexAdvanced,
  };

  renderTabContent = () => {
    const _tab = this.state.tabIndex;
    switch (_tab) {
      case tabIndexAdvanced:
        return (
          <View>
            <Advanced />
          </View>
        );
      case tabIndexCollection:
        return (
          <View>
            <Collection />
          </View>
        );
      case tabIndexPurchased:
        return (
          <View>
            <Purchased
              purchased={this.props.purchased}
            />
          </View>
        );
    }
  }

  render() {
    return (
      <ScrollView>
        <ScrollableTabView
          locked={false}
          scrollWithoutAnimation={false}
          style={{ marginTop: Layout.Height(40), backgroundColor: '#FFFFFF' }}
          tabBarUnderlineStyle={styles.underline}
          tabBarActiveTextColor="#F08080"
          tabBarInactiveTextColor="#808080"
          renderTabBar={() => <DefaultTabBar />}
          initialPage={tabIndexAdvanced}
          onChangeTab={({ i }) => {
            this.setState({ tabIndex: i });
          }}
        >
          <Text tabLabel="进阶专辑" />
          <Text tabLabel="我的收藏" />
          <Text tabLabel="已购内容" />
        </ScrollableTabView>
        { this.renderTabContent() }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  underline: {
    backgroundColor: "#F08080",
    width: Layout.Width(60),
    marginLeft: Layout.Width(74),
    marginBottom: Layout.Height(10),
  },
});
