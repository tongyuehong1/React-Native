import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import Layout from '../../res/dimensions';

function Book(props) {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={{ uri: props.item.image }}
          style={styles.imageSize}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageSize: {
    height: Layout.Height(180),
    width: Layout.Width(120),
  },
});

export default Book;
