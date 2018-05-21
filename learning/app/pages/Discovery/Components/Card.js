import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tile } from 'react-native-elements';

import Fonts from '../../../res/fonts';
import Colors from '../../../res/colors';
import Layout from '../../../res/dimensions';

function DiscoveryCard(props) {
  return (
    <View style={styles.global}>
      <View style={styles.title}>
        <View style={styles.titleBarLeft}>
          <Text style={styles.titleBarLeftFont}>{props.item.title}</Text>
        </View>
        <View style={styles.titleBarRight}>
          <View style={styles.titleBarRightBackgroundColor}>
            <Text style={styles.titleBarRightFont}>视频</Text>
          </View>
        </View>
      </View>

      <View>
        <Tile
          imageSrc={{ uri: props.item.image }}
          height={Layout.Height(350)}
          icon={{ name: 'play-circle', type: 'font-awesome' }}
          featured
        />
      </View>

      <View style={styles.cardBottom}>
        <View style={styles.cardBottomPart}>
          <Icon
            size={20}
            name="ios-open-outline"
            color={Colors.iconColorGray}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.share}</Text>
        </View>
        <View style={styles.cardBottomPart}>
          <Icon
            size={20}
            name="ios-browsers-outline"
            color={Colors.iconColorGray}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.comment}</Text>
        </View>
        <View style={styles.cardBottomPart}>
          <Icon
            size={20}
            name="ios-heart-outline"
            color={Colors.iconColorGray}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.like}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#FFFFFF',
  },

  title: {
    flexDirection: 'row',
    height: Layout.Height(80),
  },

  titleBarLeft: {
    justifyContent: 'center',
    marginLeft: Layout.Width(30),
    flex: 1,
  },

  titleBarLeftFont: {
    fontSize: Fonts.medium,
  },

  titleBarRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Layout.Width(120),
  },

  titleBarRightBackgroundColor: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Layout.Height(40),
    width: Layout.Width(60),
    borderRadius: 15,
    backgroundColor: Colors.backgroundColorLightcoral,
  },

  titleBarRightFont: {
    fontSize: Fonts.tiny,
    color: Colors.fontColorWhite,
  },

  videoDetailBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.backgroundColorGray,
  },

  videoDetailBarFont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.backgroundColorGray,
    color: Colors.fontColorWhite,
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: Layout.Height(70),
  },

  cardBottomPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Layout.Width(88),
  },

  cardBottomPartFont: {
    color: Colors.fontColorGray,
  },
});

export default DiscoveryCard;
