import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

import Notification from './Notification';

import Layout from '../../res/dimensions';
import Color from '../../res/colors';

class Mine extends Component {
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
              source={require('../../assets/images/YanTianze.jpg')}
              onPress={() => {}}
              activeOpacity={0.7}
            />
            <View style={styles.name}>
              <Text style={styles.nameStyle}>严天泽</Text>
            </View>
            <View style={styles.time}>
              <Text>阅读时长：</Text>
              <Text style={{ color: '#D2691E' }}>162小时22分钟</Text>
            </View>
          </View>
        </View>
        {
          this.props.notification.map((item) => {
            return (
              <Notification
                key={item.id}
                item={item}
              />
            );
          })
        }
        <View style={{ height: Layout.Height(300), backgroundColor: '#FFFFFF' }} />
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

export default connect(({ mine }) => ({
  ...mine,
}))(Mine);
