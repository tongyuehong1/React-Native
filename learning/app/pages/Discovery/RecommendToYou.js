import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import Card from './Components/Card';

import Fonts from '../../res/fonts';
import Layout from '../../res/dimensions';

class RecommendToYou extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.titleBar}>
          <View style={styles.titleBarLeft}>
            <Text style={styles.titleBarLeftFont}>为你推荐</Text>
          </View>
        </TouchableOpacity>

        <View>
          <Card item={this.props.toYou[0]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleBar: {
    flexDirection: "row",
    height: Layout.Height(80),
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 2,
    borderColor: '#F5F5F5',
  },

  titleBarLeft: {
    justifyContent: 'center',
    marginLeft: Layout.Width(30),
    flex: 1,
  },

  titleBarLeftFont: {
    fontSize: Fonts.medium,
    fontWeight: 'bold',
  },
});

export default connect(({ discovery }) => ({
  toYou: discovery.toYou,
}))(RecommendToYou);
