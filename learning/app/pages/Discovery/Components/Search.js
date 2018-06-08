import React, { Component } from 'react';
import { ScrollableTabView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Layout from '../../../res/dimensions';

class Classic extends Component {
  static navigationOptions = {
    title: "",
  };

  constructor(props) {
    super(props);
    this.state = { text: '啊' };
  }

  render() {
    return (
      <ScrollableTabView>
        <SearchBar
          lightTheme
          onChangeText={this.state.text}
          placeholder="搜索更多内容"
        />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
  },

  underline: {
    backgroundColor: "#F08080",
    width: Layout.Width(40),
    marginLeft: Layout.Width(134),
  },
});
export default Classic;
