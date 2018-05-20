import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';

import Layout from '../../../res/dimensions';
import Fonts from '../../../res/fonts';

function TopBar(props) {
  return (
    <View style={styles.global}>
      <Tile
        imageSrc={{ uri: props.item.image }}
        title={props.item.title}
        titleStyle={{ fontWeight: 'bold', fontSize: Fonts.small }}
        featured
        width={Layout.Width(240)}
        height={Layout.Height(240)}
        caption={props.item.caption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    marginLeft: Layout.Width(20),
    marginTop: Layout.Height(30),
    marginBottom: Layout.Height(30),
  },
});

export default TopBar;
