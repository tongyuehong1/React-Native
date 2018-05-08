import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import Book from './Book';

class Bookcase extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '书架',
  }
  render() {
    return (
      <View>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.topBarTitle}>
              严阅
            </Text>
            <Text>
              严天泽电子书阅读app，简称：严阅。
            </Text>
          </View>
        </View>
        <Book item={this.props.Book[0]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  topBarTitle: {
    fontSize: 30,
    color: "black",
  },
});

export default connect(({ bookcase }) => ({
  Book: bookcase.book,
}))(Bookcase);
