import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

import Colors from '../../res/colors';
import Layout from '../../res/dimensions';
import Fonts from '../../res/fonts';
import Icons from '../../res/icons';

export default class Top extends Component {
  render() {
    return (
      <View style={styles.global}>
        <Avatar
          large
          rounded
          source={{ uri: "http://img2.imgtn.bdimg.com/it/u=207575541,2892112559&fm=27&gp=0.jpg" }}
          onPress={() => console.log("Works!")} //eslint-disable-line
          activeOpacity={0.7}
        />

        <View style={styles.content}>
          <Text style={styles.contentName}>严天泽</Text>
          <View style={styles.contentWord}>
            <Icon
              name="create"
              size={Icons.extiny}
            />
            <Text style={styles.contentWordFont}>我关注的只有习大大，谢谢。</Text>
          </View>
          <View style={styles.contentPersonal}>
            <Text style={styles.contentPersonalFont}>关注</Text>
            <Text style={styles.contentPersonalNumber}>1</Text>
            <Text style={styles.contentPersonalDivider}>|</Text>
            <Text style={styles.contentPersonalFont}>粉丝</Text>
            <Text style={styles.contentPersonalNumber}>10000000</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Layout.Height(20),
    backgroundColor: Colors.backgroundColorWhite,
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentName: {
    fontSize: Fonts.medium,
    fontWeight: 'bold',
    marginTop: Layout.Height(20),
  },

  contentWord: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Layout.Height(10),
    marginBottom: Layout.Height(20),
  },

  contentWordFont: {
    fontSize: Fonts.tiny,
    color: Colors.fontColorGray,
    marginLeft: Layout.Width(4),
  },

  contentPersonal: {
    flexDirection: 'row',
  },

  contentPersonalFont: {
    fontSize: Fonts.small,
  },

  contentPersonalNumber: {
    marginLeft: Layout.Width(4),
    color: '#FF0000', //red
  },

  contentPersonalDivider: {
    marginLeft: Layout.Width(10),
    marginRight: Layout.Width(10),
  },
});
