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
