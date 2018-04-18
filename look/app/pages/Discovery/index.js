/*
 * Revision History:
 *     Initial: 2018/01/21        LiuQi
 */

import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, View, Text, RefreshControl, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Navigator, { dispatcher } from '../../helper/navigator';
import Carousel from '../../components/Carousel';
import Slidebar from './SlideBar/index';
import HotRecommend from './HotRecommended';
import HumanHistory from './HumanHistory';
import Geographic from './Geographic';
import Various from './Various';
import RecommendToYou from './RecommendToYou';

import Icons from '../../res/icons';
import Colors from '../../res/colors';
import Layout from '../../res/dimensions';

let dispatch;

class Discovery extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.backgroundColorWhite },
    headerLeft:
  <TouchableOpacity
    onPress={() => dispatch(Navigator.navigate('Notifications'))}
  >
    <View style={{ marginLeft: Layout.Width(40) }}>
      <Ionicons
        name="ios-notifications-outline"
        size={Icons.medium}
      />
    </View>
  </TouchableOpacity>,
    headerTitle:
  <TouchableOpacity
    onPress={() => dispatch(Navigator.navigate('Search'))}
  >
    <Badge
      containerStyle={{
       backgroundColor: 'whitesmoke',
       flexDirection: 'row',
       width: Layout.Width(360),
       height: Layout.Height(50),
      }}
    >
      <View style={{ marginRight: Layout.Width(20), marginLeft: Layout.Width(-180) }}>
        <Ionicons
          name="ios-search"
          size={Icons.extiny}
        />
      </View>
      <Text style={{ color: 'gray' }}>| 搜索 </Text>
    </Badge>
  </TouchableOpacity>,
    headerRight:
  <TouchableOpacity
    onPress={() => dispatch(Navigator.navigate('Download'))}
  >
    <Ionicons
      name="ios-cloud-download-outline"
      size={Icons.medium}
      style={{ marginRight: Layout.Width(40) }}
    />
  </TouchableOpacity>,
    tabBarLabel: '发现',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-bulb' : 'ios-bulb-outline'}
        size={Icons.medium}
        style={{ color: tintColor }}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
    dispatch = dispatcher(this.props);
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true,
    });
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 1000);
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.global}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#000000"
            title="加载中..."
            colors={['#000000']}
            progressBackgroundColor="#ffffff"
            enabled
          />
        }
      >
        <Carousel
          slides={this.props.slides}
        />

        <Slidebar navigation={this.props.navigation} />

        <HotRecommend />

        <HumanHistory />

        <Geographic />

        <Various />

        <RecommendToYou />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
  },

  global: {
    marginTop: Layout.Height(0),
  },
});

export default connect(({ carousel }) => ({
  slides: carousel.discovery,
}))(Discovery);
