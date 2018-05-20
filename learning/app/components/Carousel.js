import React from 'react';
import { Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Layout from '../res/dimensions';

const renderSlide = ({ item }) => {
  return (
    <Image
      source={{ uri: item }}
      style={styles.slide}
    />
  );
};

export default (props) => {
  return (
    <View style={styles.carousel}>
      <Carousel
        autoplay
        loop
        autoplayDelay={1000}
        autoplayInterval={2000}
        data={props.slides}
        renderItem={renderSlide}
        sliderWidth={Layout.ScreenWidth}
        itemWidth={Layout.ScreenWidth}
      />
    </View>
  );
};

const styles = {
  carousel: {
    height: Layout.Height(400),
  },

  slide: {
    width: Layout.Width(640),
    height: Layout.Height(500),
  },
};
