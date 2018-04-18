/*
 * Revision History:
 *     Initial: 2018/02/03        LiuQi
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-elements';

import Fonts from '../../../res/fonts';
import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

function Purchased(props) {
  return (
    <View style={styles.purchased}>
      <Image
        style={styles.image}
        source={{ uri: props.item.image }}
      />
      <View style={styles.detail}>
        <Text style={styles.title}>{props.item.title}</Text>
        <View style={styles.rate}>
          <Rating
            type="custom"
            ratingColor="#F08080"
            ratingBackgroundColor="#F08080"
            ratingCount={5}
            imageSize={18}
            style={{ paddingVertical: 10 }}
          />
          <Text style={styles.score}>5分</Text>
        </View>
        <Text style={styles.seen}>{props.item.seen}人看过</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  purchased: {
    flexDirection: 'row',
    marginLeft: Layout.Width(30),
    marginBottom: Layout.Width(30),
  },

  image: {
    height: Layout.Height(140),
    width: Layout.Width(260),
  },

  detail: {
    marginLeft: Layout.Width(40),
  },

  title: {
    fontSize: Fonts.large,
    fontWeight: 'bold',
  },

  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Layout.Height(20),
  },

  score: {
    marginLeft: Layout.Width(30),
  },

  seen: {
    color: Colors.fontColorGray,
  },
});

export default Purchased;
