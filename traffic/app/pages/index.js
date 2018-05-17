import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Navigator, { dispatcher } from '../helper/navigator';
import Layout from '../res/dimensions';

let dispatch;

export default class MapTypesExample extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }
  render() {
    return (
      <View style={styles.global}>
        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('Map'))}
        >
          <Text style={styles.font}>地图路况</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('Route'))}
        >
          <Text style={styles.font}>交通导航</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    height: Layout.Height(1000),
    width: Layout.Width(600),
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 40,
  },
});
