import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Book from './Book';

import Navigator, { dispatcher } from '../../helper/navigator';
import Layout from '../../res/dimensions';

let dispatch;

class Bookcase extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '书架',
  }
  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }
  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>
            严阅
          </Text>
          <Text style={{ lineHeight: 40 }}>
            严天泽电子书阅读app，简称：严阅。
          </Text>
        </View>

        <View style={styles.bookLine}>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('BookInterface'))}
          >
            <Book item={this.props.book[0]} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#FFFFFF', //white
  },
  topBar: {
    marginVertical: Layout.Height(40),
    marginHorizontal: Layout.Width(30),
    paddingBottom: Layout.Height(20),
    borderBottomWidth: 1,
    borderColor: "#D3D3D3", //lightgray
  },
  topBarTitle: {
    fontSize: 30,
    color: "#000000", //black
  },
  bookLine: {
    marginBottom: Layout.Height(20),
    paddingHorizontal: Layout.Width(20),
    marginLeft: Layout.Width(20),
    flexDirection: 'row',
  },
});

export default connect(({ bookcase }) => ({
  book: bookcase.book,
}))(Bookcase);
