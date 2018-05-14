import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Madoka } from 'react-native-textinput-effects';

import Layout from '../../res/dimensions';

export default class Information extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View>
        <View>
          <View style={styles.input}>
            <Text style={styles.inputFont}>班级</Text>
            <Madoka
              style={{ width: Layout.Width(300), marginLeft: Layout.Width(40) }}
              label="计算机14k2班"
              // this is used as active and passive border color
              borderColor="#EEE8AA"
              labelStyle={{ color: '#808080' }}
              inputStyle={{ color: '#f4a197' }}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputFont}>学号</Text>
            <Madoka
              style={{ width: Layout.Width(300), marginLeft: Layout.Width(40) }}
              label="141903020702"
              // this is used as active and passive border color
              borderColor="#aee2c9"
              labelStyle={{ color: '#808080' }}
              inputStyle={{ color: '#f4a197' }}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputFont}>电话</Text>
            <Madoka
              style={{ width: Layout.Width(300), marginLeft: Layout.Width(40) }}
              label="13833008838"
              // this is used as active and passive border color
              borderColor="#FA8072"
              labelStyle={{ color: '#808080' }}
              inputStyle={{ color: '#f4a197' }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  personal: {
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
    color: '#808080', //gray
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Layout.Width(40),
  },
  inputFont: {
    fontSize: 20,
  },
});
