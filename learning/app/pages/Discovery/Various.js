import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import Card from './Components/Card';

import Fonts from '../../res/fonts';
import Layout from '../../res/dimensions';

class Various extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.titleBar}>
          <View style={styles.titleBarLeft}>
            <Text style={styles.titleBarLeftFont}>看点V</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Card item={this.props.various[0]} />
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
    fontWeight: 'bold',
    fontSize: Fonts.medium,
  },
});

export default connect(({ discovery }) => ({
  various: discovery.various,
}))(Various);
