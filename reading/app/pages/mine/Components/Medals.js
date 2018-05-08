import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Layout from '../../../res/dimensions';
import Colors from '../../../res/colors';
import Icons from '../../../res/icons';
import Fonts from '../../../res/fonts';

function Medal(props) {
  return (
    <View style={styles.content}>
      <View
        style={styles.contentLargeCircle}
        backgroundColor={props.item.backgroundColorLarge}
      >
        <View
          style={styles.contentMediumCircle}
          backgroundColor={props.item.backgroundColorMedium}
        >
          <View
            style={styles.contentSmallCircle}
            backgroundColor={props.item.backgroundColorSmall}
          >
            <Icon
              size={Icons.large}
              name={props.item.icon}
              type="ionicon"
              color={props.item.iconColor}
            />
            <Text style={styles.contentFont}>{props.item.achievement}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: Layout.Height(30),
    marginLeft: Layout.Width(20),
  },

  contentLargeCircle: {
    height: Layout.Height(138),
    width: Layout.Width(138),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentMediumCircle: {
    height: Layout.Height(126),
    width: Layout.Width(126),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentSmallCircle: {
    height: Layout.Height(110),
    width: Layout.Width(110),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentFont: {
    fontWeight: '900',
    fontSize: Fonts.tiny,
    color: Colors.fontColorWhite,
  },
});

export default Medal;
