import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
} from 'react-native';
import { Button } from 'react-native-elements';
import Navigator, { dispatcher } from '../helper/navigator';

import Layout from '../res/dimensions';

let dispatch;

export default class Search extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = { text: '输入位置' };
    dispatch = dispatcher(this.props);
  }
  render() {
    const onButtonPress = () => {
      Alert.alert('Button has been pressed!');
    };
    return (
      <View style={styles.input}>
        <TextInput
          autoFocus
          selectTextOnFocus
          underlineColorAndroid="transparent"
          style={styles.text}
          onPress={onButtonPress}
          value={this.state.text}
          onChangeText={({ text }) => this.setState({ text })}
        />

        <Button
          style={styles.button}
          onPress={() => dispatch(Navigator.navigate('Map'))}
          title="搜索"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    width: Layout.Width(300),
    backgroundColor: '#FFFFFF',
    marginBottom: Layout.Height(10),
    padding: 0,
  },
  button: {
    backgroundColor: '#F08080',
  },
});
