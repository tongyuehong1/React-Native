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
