import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';

import Layout from '../../res/dimensions';
import Color from '../../res/colors';

export default class Mine extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '个人',
  }
  render() {
    return (
      <View>
        <View style={styles.personal}>
          <View style={styles.avatar}>
            <Avatar
              xlarge
              rounded
              source={require('../../assets/images/YanTianze.jpg')}//eslint-disable-line
              onPress={() => {}}
              activeOpacity={0.7}
            />
            <View style={styles.name}>
              <Text style={styles.nameStyle}>严天泽</Text>
            </View>
            <View style={styles.time}>
              <Text>个性签名：</Text>
              <Text style={{ color: '#D2691E' }}>爱阅读，爱生活</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.notification}>
          {/* <Icon
            size={30}
            name="ios-cloud-download-outline"
            type="ionicon"
            color="#808080" //gray
            marginHorizontal={Layout.Width(30)}
          /> */}
          <Text style={styles.notificationFont}>我的收藏</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  personal: {
    backgroundColor: Color.backgroundBasicColor,
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
  notification: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Layout.Height(40),
    backgroundColor: '#F5DEB3',
  },
  notificationFont: {
    fontSize: 20,
    color: '#000000',
  },
});
