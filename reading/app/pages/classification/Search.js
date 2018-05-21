import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import Layout from '../../res/dimensions';
import Color from '../../res/colors';

export default class Search extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '个人',
  }
  constructor(props) {
    super(props);
    this.state = { text: '请输入搜索内容' };
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ height: Layout.Height(80) }}
          onChangeText={({ text }) => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  personal: {
    backgroundColor: Color.backgroundBasicColor,
    marginBottom: Layout.Height(10),
    paddingTop: Layout.Height(60),
  },
  editor: {
    marginTop: Layout.Height(20),
    marginRight: Layout.Width(20),
  },
  avatar: {
    alignItems: 'center',
    marginBottom: Layout.Height(20),
  },
  name: {
    marginTop: Layout.Height(20),
  },
  nameStyle: {
    fontSize: 20,
    color: '#000000', //black
  },
  time: {
    marginTop: Layout.Height(10),
    flexDirection: 'row',
  },
});
