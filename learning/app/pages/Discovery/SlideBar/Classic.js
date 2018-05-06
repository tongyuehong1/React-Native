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
 *     Initial: 2018/03/12        LiuQi
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Card from '../Components/Card';

import Layout from '../../../res/dimensions';

const tabIndexHot = 0;
const tabIndexNew = 1;

class Classic extends Component {
  static navigationOptions = {
    title: "经典必看",
  };

  state = {
    tabIndex: tabIndexHot,
  };

  renderTabContent = () => {
    const _tab = this.state.tabIndex;
    switch (_tab) {
      case tabIndexHot:
        return (
          <View style={{ marginTop: Layout.Height(-30) }}>
            {
              this.props.hotVideo.map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                  />
                );
              })
            }
          </View>
        );
      case tabIndexNew:
        return (
          <View>
            {
              this.props.toYou.map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                  />
                );
              })
            }
          </View>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <ScrollView>
        <ScrollableTabView
          style={{ backgroundColor: '#FFFFFF' }}
          tabBarUnderlineStyle={styles.underline}
          tabBarActiveTextColor="#F08080"
          tabBarInactiveTextColor="#808080"
          tabBarTextStyle={{ fontSize: 18 }}
          renderTabBar={() => <DefaultTabBar />}
          initialPage={tabIndexHot}
          onChangeTab={({ i }) => {
            this.setState({ tabIndex: i });
          }}
        >
          <Text tabLabel="最热" />
          <Text tabLabel="最新" />
        </ScrollableTabView>
        {this.renderTabContent()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  underline: {
    backgroundColor: "#F08080",
    width: Layout.Width(40),
    marginLeft: Layout.Width(138),
    marginBottom: Layout.Height(10),
  },
});

export default connect(({ discovery }) => ({
  hotVideo: discovery.hotVideo,
  toYou: discovery.toYou,
}))(Classic);
