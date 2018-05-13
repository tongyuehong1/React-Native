import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Layout from '../../res/dimensions';

export default class Register extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.global}>
        <Image
          style={styles.image}
          source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526202568243&di=8a8283400066ebee3307baf127f4a441&imgtype=0&src=http%3A%2F%2Fimg.itlun.cn%2Fuploads%2Fallimg%2F170109%2F1-1F109194Z1.jpg" }}
        />
        <Text style={styles.font}>你他妈注册个球</Text>
        <Text style={styles.font}>二逼</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginTop: Layout.Height(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: Layout.Height(300),
    width: Layout.Width(300),
    marginBottom: Layout.Height(100),
  },
  font: {
    fontSize: 30,
    lineHeight: 80,
  },
});
