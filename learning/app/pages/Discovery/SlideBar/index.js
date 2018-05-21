import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Navigator, { dispatcher } from '../../../helper/navigator';
import Touch from './Components/Touch';

import Layout from '../../../res/dimensions';

export default class SlideBar extends Component {
  render() {
    const dispatch = dispatcher(this.props);
    return (
      <View style={styles.slideBar}>
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
          onPress={() => dispatch(Navigator.navigate('Classic'))}
        />

        <Touch
          name="ios-stats"
          text="分类"
          color="mediumpurple"
          onPress={() => dispatch(Navigator.navigate('Classic'))}
        />

        <Touch
          name="ios-bookmarks"
          text="历史今天"
          color="dodgerblue"
          onPress={() => dispatch(Navigator.navigate('Classic'))}
        />

        <Touch
          name="ios-ribbon"
          text="会员服务"
          color="gold"
          onPress={() => dispatch(Navigator.navigate('Classic'))}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slideBar: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: Layout.Height(20),
  },
});
