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
