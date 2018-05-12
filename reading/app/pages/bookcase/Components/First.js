import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
} from 'react-native';

export default class Bookcase extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <ViewPagerAndroid
          initialPage={0}
          style={styles.pageStyle}
          onPageSelected={this.onPageSelected}
        >
          <View>
            <Text>First Page!</Text>
          </View>
          <View>
            <Text>Second Page!</Text>
          </View>
          <View>
            <Text>Third Page!</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    height: '80%',
    justifyContent: 'center',
  },
  viewStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#DEB887',
  },
});
