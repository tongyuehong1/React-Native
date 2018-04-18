/*
 * Revision History:
 *     Initial: 2018/02/02        LiuQi
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Tile } from 'react-native-elements';

import Fonts from '../../../res/fonts';
import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

function Collection(props) {
  return (
    <View style={styles.card}>
      <View style={styles.video}>
        <Tile
          imageSrc={{ uri: props.item.image }}
          icon={{ name: 'play-circle', type: 'font-awesome', marginTop: Layout.Height(60) }}
          featured
          width={Layout.Width(240)}
          height={Layout.Height(180)}
        />
      </View>

      <View style={styles.briefIntroduction}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.time}>时长{props.item.minute}分{props.item.second}秒</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: Layout.Height(20),
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: Layout.Width(20),
    marginRight: Layout.Width(20),
    borderBottomWidth: 1,
    borderColor: Colors.borderColorLightgray,
  },

  video: {
    position: 'relative',
  },

  image: {
    height: Layout.Height(140),
    width: Layout.Width(240),
  },

  icon: {
    position: 'absolute',
    top: Layout.Height(40),
    left: Layout.Width(100),
  },

  briefIntroduction: {
    width: Layout.Width(320),
    marginLeft: Layout.Width(30),
  },

  title: {
    fontSize: Fonts.medium,
    marginBottom: Layout.Width(60),
  },

  time: {
    fontSize: Fonts.small,
    color: Colors.fontColorGray,
  },
});

export default Collection;
