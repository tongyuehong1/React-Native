
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import Layout from '../../../res/dimensions';

function BookAndDetails(props) {
  return (
    <View style={styles.book}>
      <View style={styles.bookDetail}>
        <Image
          style={styles.image}
          source={{ uri: props.item.image }}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{props.item.title}</Text>
          <Text style={styles.author}>{props.item.author}</Text>
          <Text style={styles.category}>图书分类：{props.item.category}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookDetail: {
    marginBottom: Layout.Height(40),
    flexDirection: 'row',
  },
  image: {
    marginLeft: Layout.Width(40),
    height: Layout.Height(240),
    width: Layout.Width(180),
  },
  details: {
    marginLeft: Layout.Width(40),
  },
  title: {
    fontSize: 20,
  },
  author: {
    fontSize: 16,
    color: 'blue',
  },
  category: {
    lineHeight: Layout.Height(100),
  },
});

export default BookAndDetails;
