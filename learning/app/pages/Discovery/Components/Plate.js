import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';

import Fonts from '../../../res/fonts';
import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';

function DiscoveryPlate(props) {
  return (
    <View style={styles.global}>
      <View style={styles.title}>
        <View style={styles.titleBarTop}>
          <View style={styles.titleBarLeft}>
            <Text style={styles.titleBarLeftFont}>{props.item.title}</Text>
          </View>
          <View style={styles.titleBarRight}>
            <View style={styles.titleBarRightBackgroundcolor}>
              <Text style={styles.titleBarRightFont}>视频</Text>
            </View>
          </View>
        </View>
        <Text style={styles.titleBarBottom}>{props.item.subtitle}</Text>
      </View>

      <View>
        <Tile
          imageSrc={{ uri: props.item.image }}
          icon={{ name: 'play-circle', type: 'font-awesome' }}
          featured
          height={Layout.Height(350)}
        />
      </View>

      <View style={styles.cardBottom}>
        <View style={styles.cardBottomPart}>
          <Image
            style={styles.cardBottomPartImage}
            source={{ uri: props.item.smallImageLeft }}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.smallWordLeft}</Text>
        </View>
        <View style={styles.cardBottomPart}>
          <Image
            style={styles.cardBottomPartImage}
            source={{ uri: props.item.smallImageCenter }}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.smallWordCenter}</Text>
        </View>
        <View style={styles.cardBottomPart}>
          <Image
            style={styles.cardBottomPartImage}
            source={{ uri: props.item.smallImageRight }}
          />
          <Text style={styles.cardBottomPartFont}>{props.item.smallWordRight}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: Colors.backgroundColorWhite,
  },

  title: {
    marginLeft: Layout.Width(30),
    height: Layout.Height(120),
    justifyContent: 'center',
  },

  titleBarTop: {
    flexDirection: 'row',
    height: Layout.Height(80),
  },

  titleBarLeft: {
    justifyContent: 'center',
    flex: 1,
  },

  titleBarLeftFont: {
    fontSize: Fonts.small,
  },

  titleBarRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Layout.Width(120),
  },

  titleBarRightBackgroundcolor: {
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

  titleBarBottom: {
    fontSize: Fonts.tiny,
    color: Colors.fontColorGray,
    marginBottom: Layout.Height(20),
  },

  videoDetailBar: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundColorGray,
    justifyContent: 'space-around',
  },

  videoDetailBarFont: {
    color: Colors.backgroundColorWhite,
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: Layout.Height(260),
  },

  cardBottomPart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Layout.Width(190),
  },

  cardBottomPartImage: {
    height: Layout.Height(120),
    width: Layout.Width(190),
  },

  cardBottomPartFont: {
    color: Colors.fontColorGray,
    marginTop: Layout.Height(20),
    width: Layout.Width(180),
  },
});

export default DiscoveryPlate;
