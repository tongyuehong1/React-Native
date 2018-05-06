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
 *     Initial: 2018/02/04        LiuQi
 */

/* eslint-disable default-case */

import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import Wonderful from './Components/Wonderful';
import Concern from './Components/Concern';
import Dynamic from './Components/Dynamic';

import Layout from '../../res/dimensions';
import Colors from '../../res/colors';
import Fonts from '../../res/fonts';

const tabIndexWonderful = 0;
const tabIndexConcern = 1;
const tabIndexDynamic = 2;

class ArticlesList extends Component {
  state = {
    tabIndex: tabIndexConcern,
  };

  renderTabContent = () => {
    const _tab = this.state.tabIndex;

    switch (_tab) {
      case tabIndexWonderful:
        return (
          <View>
            {
              this.props.wonderful.map((item) => {
                return (
                  <Wonderful
                    key={item.id}
                    item={item}
                  />
                );
              })
            }
          </View>
        );
      case tabIndexConcern:
        return (
          <View>
            {
              this.props.concern.map((item) => {
                return (
                  <Concern
                    key={item.id}
                    item={item}
                  />
                );
              })
            }
          </View>
        );
      case tabIndexDynamic:
        return (
          <View>
            {
              this.props.dynamic.map((item) => {
                return (
                  <Dynamic
                    key={item.id}
                    item={item}
                  />
                );
              })
            }
          </View>
        );
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Text style={styles.titleLeftColor}>文章列表</Text>
          </View>
          <View style={styles.titleRight}>
            <ScrollableTabView
              locked={false}
              scrollWithoutAnimation={false}
              pagingEnabled
              tabBarUnderlineStyle={styles.underline}
              tabBarActiveTextColor={Colors.fontColorLightcoral}
              tabBarInactiveTextColor={Colors.fontColorGray}
              tabBarTextStyle={{ marginTop: Layout.Height(20), fontSize: Fonts.medium }}
              initialPage={tabIndexWonderful}
              onChangeTab={({ i }) => {
                this.setState({ tabIndex: i });
              }}
            >
              <Text tabLabel="精彩" />
              <Text tabLabel="关注" />
              <Text tabLabel="动态" />
            </ScrollableTabView>
          </View>
        </View>
        { this.renderTabContent() }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.borderColorLightgray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  titleLeft: {
    flex: 1,
    marginLeft: Layout.Width(20),
  },

  titleLeftColor: {
    color: Colors.fontColorGoldenrod,
  },

  titleRight: {
    width: Layout.Width(260),
  },

  underline: {
    backgroundColor: Colors.backgroundColorLightcoral,
    width: Layout.Width(40),
    marginLeft: Layout.Width(20),
    marginBottom: Layout.Height(10),
  },
});

export default connect(({ community }) => ({
  wonderful: community.wonderful,
  concern: community.concern,
  dynamic: community.dynamic,
}))(ArticlesList);
