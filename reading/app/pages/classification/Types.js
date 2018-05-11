import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Layout from '../../res/dimensions';

function Types(props) {
  return (
    <View style={styles.global}>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.imageSize}
          source={{ uri: props.item.image }}
        />
        <View style={styles.generalize}>
          <View style={styles.title}>
            <Text style={styles.titleFont}>{props.item.title}</Text>
          </View>
          <Text style={styles.description}>{props.item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    borderBottomWidth: 1,
    borderColor: "#D3D3D3", //lightgray
  },
  card: {
    flexDirection: 'row',
    marginHorizontal: Layout.Width(20),
    paddingVertical: Layout.Height(20),
  },
  imageSize: {
    height: Layout.Height(260),
    width: Layout.Width(180),
  },
  generalize: {
    marginLeft: Layout.Width(20),
    width: Layout.Width(340),
  },
  title: {
    marginVertical: Layout.Height(20),
  },
  titleFont: {
    color: "#000000", //black
    fontSize: 20,
  },
  description: {
    lineHeight: 20,
  },
});

export default Types;
