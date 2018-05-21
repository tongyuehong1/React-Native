import React from 'react';
import { ScrollView, Image, StyleSheet, View, Text, RefreshControl, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Navigator, { dispatcher } from '../../helper/navigator';
import Slidebar from './SlideBar/index';
import HotRecommend from './HotRecommended';
import HumanHistory from './HumanHistory';
import Geographic from './Geographic';
import Various from './Various';
import RecommendToYou from './RecommendToYou';

import Icons from '../../res/icons';
import Layout from '../../res/dimensions';

let dispatch;

export default class Discovery extends React.Component {
  static navigationOptions = {
    header: (
      <View
        style={{
          flexDirection: 'row',
          marginTop: Layout.Height(20),
          height: Layout.Height(100),
          alignItems: 'center',
        }}
      >

        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('Notifications'))}
        >
          <View style={{ marginHorizontal: Layout.Width(40) }}>
            <Ionicons
              name="ios-notifications-outline"
              size={Icons.medium}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('Search'))}
        >
          <Badge
            containerStyle={{
            backgroundColor: '#FFFFFF',
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
        </TouchableOpacity>
      </View>
    ),

    tabBarLabel: '首页',
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
        <View>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&h=350' }}
            style={styles.image}
          />
        </View>

        <View style={styles.lineSpacing}>
          <Slidebar
            navigation={this.props.navigation}
          />
        </View>

        <View style={styles.lineSpacing}>
          <HotRecommend />
        </View>

        <View style={styles.lineSpacing}>
          <HumanHistory />
        </View>

        <View style={styles.lineSpacing}>
          <Geographic />
        </View>

        <View style={styles.lineSpacing}>
          <Various />
        </View>

        <View style={styles.lineSpacing}>
          <RecommendToYou />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
  },
  image: {
    height: Layout.Height(300),
    width: Layout.Width(640),
  },
  lineSpacing: {
    marginBottom: Layout.Height(10),
  },
});
