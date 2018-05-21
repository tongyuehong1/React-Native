import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import Layout from '../../../../res/dimensions';

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
          size={20}
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
  },

  font: {
    marginTop: Layout.Height(10),
    marginBottom: Layout.Height(10),
    fontSize: 14,
    fontWeight: 'bold',
  },
});
