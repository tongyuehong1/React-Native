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
