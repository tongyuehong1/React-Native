import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Layout from '../../res/dimensions';

function Book(props) {
  return (
    <View style={styles.book}>
      <Image
        style={styles.imageSize}
        source={{ uri: props.item.image }}
      />
      <View style={styles.detail}>
        <Text style={styles.name}>{props.item.name}</Text>
        <Text style={styles.author}>{props.item.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  book: {
    width: Layout.Width(150),
  },
  imageSize: {
    height: Layout.Height(200),
    width: Layout.Width(150),
  },
  detail: {
    marginTop: Layout.Height(10),
  },
  name: {
    color: '#6495ED', //CornflowerBlue
  },
  author: {
    color: "#000000", //black
  },
});

export default Book;
