import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import Layout from '../../../../res/dimensions';
import Icons from '../../../../res/icons';
import Fonts from '../../../../res/fonts';

export default (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.layout}
        onPress={props.onPress}
      >
        <Icon
          reverse
          raised
          name={props.name}
          type="ionicon"
          color={props.color}
          size={Icons.medium}
        />
        <Text style={styles.font}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: Layout.Height(14),
  },

  font: {
    marginTop: Layout.Height(10),
    marginBottom: Layout.Height(10),
    fontSize: Fonts.small,
    fontWeight: 'bold',
  },
});
